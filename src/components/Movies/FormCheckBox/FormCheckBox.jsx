import './FormCheckBox.css';

function FormCheckBox() {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input type="checkbox" className="checkbox__button" />
        <svg className="checkbox__button-svg" viewBox="0 0 36 20" fill="none">
          <g id="smalltumber">
            <rect className="checkbox__button-svg-rect" width="36" height="20" rx="10" fill="#2BE080" />
            <circle className="checkbox__button-svg-circle" cx="26" cy="10" r="4" fill="white" />
          </g>
        </svg>
      </label>
      <span className="checkbox__title">Короткометражки</span>
    </div>
  );
}

export default FormCheckBox;