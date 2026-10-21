# Portfolio Content

Personal portfolio site whose content (CV document, work history, projects) is owner-editable through a local admin UI instead of code changes.

## Language

**CV Document**:
The downloadable PDF résumé owned by the site owner. Exactly one is active at a time.
_Avoid_: CV file, resume pdf

**Experience**:
One entry in the work-history list: a role at a company over a period, with supporting bullet points.
_Avoid_: work experience item, job, history entry

**Project**:
One entry in the portfolio showcase list: a built product with a thumbnail, description, stack, and demo link.
_Avoid_: works item, portfolio piece, job

**Stack Label**:
The canonical name of one technology on a Project (e.g. "React", "MySQL"), mapped to an icon at render time. Unknown labels fall back to a generic icon.
_Avoid_: tech, tech stack item, icon key

**Content File**:
A JSON document holding one domain's data (Experiences, Projects, or site-level fields like the CV Document), edited by the admin UI and rendered by the site.
_Avoid_: data file, collection, model
