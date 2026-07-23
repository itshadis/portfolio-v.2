import './index.scss';
import React from 'react';

interface ListWorksProps {
  img: string;
  title: string;
  detail: string;
  stack: React.ReactNode[];
  link: string;
}

function ListWorks({ img, title, detail, stack, link }: ListWorksProps) {
  return (
    <>
      <div className="img-wrapper">
        <img className="img" src={img} alt={title} />
      </div>
      <div className="details">
        <h2 className="title">{title}</h2>
        <p>{detail}</p>
        <div className="stack-wrapper">
          <div className="stack">
            <span>Stack :</span>
            <ul className="list-stack">
              {stack.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="button-wrapper">
          <button className="button">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default ListWorks;
