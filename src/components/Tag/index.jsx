import './index.scss';

function Tag({tag, variant}) {
  return (
    <h1 className={variant}>{tag}</h1>
  )
}

export default Tag;