'use client';

import { useCallback, useEffect, useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import type { ExperienceItem, Project, SiteContent } from '@/lib/content-schema';
import { STACK_LABELS, type StackLabel } from '@/lib/stack-labels';
import './admin.scss';

type Tab = 'experience' | 'project' | 'cv';

interface ExpFormState {
  index: number | null;
  title: string;
  company: string;
  date: string;
  describe: string;
}

interface ProjFormState {
  index: number | null;
  img: string;
  title: string;
  detail: string;
  stack: StackLabel[];
  link: string;
}

const emptyExpForm: ExpFormState = {
  index: null,
  title: '',
  company: '',
  date: '',
  describe: '',
};

const emptyProjForm: ProjFormState = {
  index: null,
  img: '',
  title: '',
  detail: '',
  stack: [],
  link: '',
};

function move<T>(list: T[], index: number, dir: -1 | 1): T[] {
  const target = index + dir;
  if (target < 0 || target >= list.length) return list;
  const next = [...list];
  [next[index], next[target]] = [next[target], next[index]];
  return next;
}

export default function AdminPanel() {
  const [tab, setTab] = useState<Tab>('experience');
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [site, setSite] = useState<SiteContent | null>(null);
  const [expForm, setExpForm] = useState<ExpFormState | null>(null);
  const [projForm, setProjForm] = useState<ProjFormState | null>(null);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    const [expRes, worksRes, siteRes] = await Promise.all([
      fetch('/api/admin/experience'),
      fetch('/api/admin/works'),
      fetch('/api/admin/site'),
    ]);
    if (!expRes.ok || !worksRes.ok || !siteRes.ok) {
      setMsg({ ok: false, text: 'Gagal memuat data.' });
      return;
    }
    setExperiences(await expRes.json());
    setProjects(await worksRes.json());
    setSite(await siteRes.json());
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setExpForm(null);
        setProjForm(null);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  async function saveExperiences(list: ExperienceItem[], okText: string) {
    setBusy(true);
    const res = await fetch('/api/admin/experience', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(list),
    });
    const data = await res.json().catch(() => null);
    setBusy(false);
    if (!res.ok) {
      setMsg({ ok: false, text: data?.error ?? 'Gagal menyimpan pengalaman.' });
      return;
    }
    setExperiences(list);
    setMsg({ ok: true, text: okText });
  }

  async function saveProjects(list: Project[], okText: string) {
    setBusy(true);
    const res = await fetch('/api/admin/works', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(list),
    });
    const data = await res.json().catch(() => null);
    setBusy(false);
    if (!res.ok) {
      setMsg({ ok: false, text: data?.error ?? 'Gagal menyimpan proyek.' });
      return;
    }
    setProjects(list);
    setMsg({ ok: true, text: okText });
  }

  async function uploadImage(file: File) {
    if (!projForm) return;
    setBusy(true);
    const form = new FormData();
    form.append('file', file);
    const res = await fetch('/api/admin/upload/image', { method: 'POST', body: form });
    const data = await res.json().catch(() => null);
    setBusy(false);
    if (!res.ok) {
      setMsg({ ok: false, text: data?.error ?? 'Gagal mengunggah gambar.' });
      return;
    }
    setProjForm({ ...projForm, img: data.path });
    setMsg({ ok: true, text: 'Gambar diunggah. Simpan proyek untuk menerapkan.' });
  }

  async function uploadCv(file: File) {
    setBusy(true);
    const form = new FormData();
    form.append('file', file);
    const res = await fetch('/api/admin/upload/cv', { method: 'POST', body: form });
    const data = await res.json().catch(() => null);
    setBusy(false);
    if (!res.ok) {
      setMsg({ ok: false, text: data?.error ?? 'Gagal mengunggah CV.' });
      return;
    }
    setSite((prev) => (prev ? { ...prev, cvFilename: data.cvFilename } : prev));
    setMsg({ ok: true, text: 'CV diperbarui.' });
  }

  function submitExpForm() {
    if (!expForm) return;
    const title = expForm.title.trim();
    const company = expForm.company.trim();
    const date = expForm.date.trim();
    const describe = expForm.describe
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
    if (!title || !company || !date) {
      setMsg({ ok: false, text: 'Judul, perusahaan, dan tanggal wajib diisi.' });
      return;
    }
    const item: ExperienceItem = { title, company, date, describe };
    const list =
      expForm.index === null
        ? [...experiences, item]
        : experiences.map((e, i) => (i === expForm.index ? item : e));
    saveExperiences(list, expForm.index === null ? 'Pengalaman ditambahkan.' : 'Pengalaman diperbarui.');
    setExpForm(null);
  }

  function submitProjForm() {
    if (!projForm) return;
    const img = projForm.img.trim();
    const title = projForm.title.trim();
    const detail = projForm.detail.trim();
    const link = projForm.link.trim();
    if (!img || !title || !detail || !link) {
      setMsg({ ok: false, text: 'Gambar, judul, deskripsi, dan link demo wajib diisi.' });
      return;
    }
    if (!link.startsWith('http')) {
      setMsg({ ok: false, text: 'Link demo harus diawali http:// atau https://.' });
      return;
    }
    if (projForm.stack.length === 0) {
      setMsg({ ok: false, text: 'Pilih minimal satu stack.' });
      return;
    }
    const item: Project = { img, title, detail, stack: projForm.stack, link };
    const list =
      projForm.index === null
        ? [...projects, item]
        : projects.map((p, i) => (i === projForm.index ? item : p));
    saveProjects(list, projForm.index === null ? 'Proyek ditambahkan.' : 'Proyek diperbarui.');
    setProjForm(null);
  }

  return (
    <main className="admin">
      <header className="admin-header">
        <h1>Admin Konten</h1>
        <nav>
          <button
            className={tab === 'experience' ? 'active' : ''}
            onClick={() => setTab('experience')}
          >
            Pengalaman
          </button>
          <button className={tab === 'project' ? 'active' : ''} onClick={() => setTab('project')}>
            Proyek
          </button>
          <button className={tab === 'cv' ? 'active' : ''} onClick={() => setTab('cv')}>
            CV
          </button>
        </nav>
      </header>

      {msg && <p className={msg.ok ? 'msg ok' : 'msg err'}>{msg.text}</p>}
      <p className="hint">
        Perubahan tersimpan ke file JSON. Jalankan <code>git add . &amp;&amp; git commit &amp;&amp; git push</code>{' '}
        untuk publish.
      </p>

      {tab === 'experience' && (
        <section>
          <div className="section-head">
            <h2>Daftar Pengalaman</h2>
            <button
              className="primary"
              onClick={() => setExpForm({ ...emptyExpForm })}
              disabled={busy}
            >
              Tambah Pengalaman
            </button>
          </div>
          <ul className="item-list">
            {experiences.map((item, index) => (
              <li key={index}>
                <div className="item-info">
                  <strong>{item.title}</strong> — {item.company}
                  <small>{item.date}</small>
                </div>
                <div className="actions">
                  <button
                    className="icon"
                    title="Naik"
                    aria-label="Naik"
                    onClick={() => saveExperiences(move(experiences, index, -1), 'Urutan diperbarui.')}
                    disabled={index === 0 || busy}
                  >
                    <FaArrowUp />
                  </button>
                  <button
                    className="icon"
                    title="Turun"
                    aria-label="Turun"
                    onClick={() => saveExperiences(move(experiences, index, 1), 'Urutan diperbarui.')}
                    disabled={index === experiences.length - 1 || busy}
                  >
                    <FaArrowDown />
                  </button>
                  <button
                    onClick={() =>
                      setExpForm({
                        index,
                        title: item.title,
                        company: item.company,
                        date: item.date,
                        describe: item.describe.join('\n'),
                      })
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="danger"
                    onClick={() =>
                      saveExperiences(
                        experiences.filter((_, i) => i !== index),
                        'Pengalaman dihapus.'
                      )
                    }
                    disabled={busy}
                  >
                    Hapus
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {expForm && (
            <div className="modal-overlay" onClick={() => setExpForm(null)}>
              <form
                className="editor modal"
                onClick={(e) => e.stopPropagation()}
                onSubmit={(e) => {
                  e.preventDefault();
                  submitExpForm();
                }}
              >
              <h3>{expForm.index === null ? 'Tambah Pengalaman' : 'Edit Pengalaman'}</h3>
              <label>
                Judul
                <input
                  value={expForm.title}
                  onChange={(e) => setExpForm({ ...expForm, title: e.target.value })}
                />
              </label>
              <label>
                Perusahaan
                <input
                  value={expForm.company}
                  onChange={(e) => setExpForm({ ...expForm, company: e.target.value })}
                />
              </label>
              <label>
                Tanggal
                <input
                  value={expForm.date}
                  placeholder="Feb, 2025 – Present"
                  onChange={(e) => setExpForm({ ...expForm, date: e.target.value })}
                />
              </label>
              <label>
                Deskripsi (satu poin per baris)
                <textarea
                  rows={8}
                  value={expForm.describe}
                  onChange={(e) => setExpForm({ ...expForm, describe: e.target.value })}
                />
              </label>
              <div className="actions">
                <button type="submit" className="primary" disabled={busy}>
                  Simpan
                </button>
                <button type="button" onClick={() => setExpForm(null)}>
                  Batal
                </button>
              </div>
              </form>
            </div>
          )}
        </section>
      )}

      {tab === 'project' && (
        <section>
          <div className="section-head">
            <h2>Daftar Proyek</h2>
            <button
              className="primary"
              onClick={() => setProjForm({ ...emptyProjForm })}
              disabled={busy}
            >
              Tambah Proyek
            </button>
          </div>
          <ul className="item-list">
            {projects.map((item, index) => (
              <li key={index}>
                <div className="item-info">
                  <strong>{item.title}</strong>
                  <small>{item.stack.join(', ')}</small>
                </div>
                <div className="actions">
                  <button
                    className="icon"
                    title="Naik"
                    aria-label="Naik"
                    onClick={() => saveProjects(move(projects, index, -1), 'Urutan diperbarui.')}
                    disabled={index === 0 || busy}
                  >
                    <FaArrowUp />
                  </button>
                  <button
                    className="icon"
                    title="Turun"
                    aria-label="Turun"
                    onClick={() => saveProjects(move(projects, index, 1), 'Urutan diperbarui.')}
                    disabled={index === projects.length - 1 || busy}
                  >
                    <FaArrowDown />
                  </button>
                  <button
                    onClick={() =>
                      setProjForm({
                        index,
                        img: item.img,
                        title: item.title,
                        detail: item.detail,
                        stack: item.stack,
                        link: item.link,
                      })
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="danger"
                    onClick={() =>
                      saveProjects(
                        projects.filter((_, i) => i !== index),
                        'Proyek dihapus.'
                      )
                    }
                    disabled={busy}
                  >
                    Hapus
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {projForm && (
            <div className="modal-overlay" onClick={() => setProjForm(null)}>
              <form
                className="editor modal"
                onClick={(e) => e.stopPropagation()}
                onSubmit={(e) => {
                  e.preventDefault();
                  submitProjForm();
                }}
              >
              <h3>{projForm.index === null ? 'Tambah Proyek' : 'Edit Proyek'}</h3>
              <label>
                Judul
                <input
                  value={projForm.title}
                  onChange={(e) => setProjForm({ ...projForm, title: e.target.value })}
                />
              </label>
              <label>
                Deskripsi
                <textarea
                  rows={5}
                  value={projForm.detail}
                  onChange={(e) => setProjForm({ ...projForm, detail: e.target.value })}
                />
              </label>
              <label>
                Gambar (unggah file atau isi path)
                <input
                  type="file"
                  accept="image/*"
                  disabled={busy}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) uploadImage(file);
                    e.target.value = '';
                  }}
                />
              </label>
              <label>
                Path gambar
                <input
                  value={projForm.img}
                  placeholder="/images/nama-gambar.png"
                  onChange={(e) => setProjForm({ ...projForm, img: e.target.value })}
                />
              </label>
              {projForm.img && <img className="preview" src={projForm.img} alt="Pratinjau gambar" />}
              <fieldset>
                <legend>Stack</legend>
                {STACK_LABELS.map((label) => (
                  <label key={label} className="check">
                    <input
                      type="checkbox"
                      checked={projForm.stack.includes(label)}
                      onChange={(e) =>
                        setProjForm({
                          ...projForm,
                          stack: e.target.checked
                            ? [...projForm.stack, label]
                            : projForm.stack.filter((s) => s !== label),
                        })
                      }
                    />
                    {label}
                  </label>
                ))}
              </fieldset>
              <label>
                Link demo
                <input
                  value={projForm.link}
                  placeholder="https://contoh.vercel.app"
                  onChange={(e) => setProjForm({ ...projForm, link: e.target.value })}
                />
              </label>
              <div className="actions">
                <button type="submit" className="primary" disabled={busy}>
                  Simpan
                </button>
                <button type="button" onClick={() => setProjForm(null)}>
                  Batal
                </button>
              </div>
              </form>
            </div>
          )}
        </section>
      )}

      {tab === 'cv' && (
        <section>
          <h2>CV Document</h2>
          {site ? (
            <>
              <p>
                File aktif: <code>/documents/{site.cvFilename}</code>
              </p>
              <label className="upload">
                Ganti CV (PDF, maksimal 10MB)
                <input
                  type="file"
                  accept="application/pdf"
                  disabled={busy}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) uploadCv(file);
                    e.target.value = '';
                  }}
                />
              </label>
            </>
          ) : (
            <p>Memuat…</p>
          )}
        </section>
      )}
    </main>
  );
}
