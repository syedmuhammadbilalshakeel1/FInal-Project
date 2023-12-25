import React, { useState } from "react";

export default function Textarea({
  label, content, refName, maxContentLen,
  setDisableActionBtns, setContent,
  required =  false
}) {
  const [contentOverLength, setContentOverLength] = useState(false);

  function onTextareaChange() {
    const overLength = refName.current.value.length > maxContentLen;
    setContentOverLength(overLength);
    setDisableActionBtns(overLength);
    setContent(refName.current.value);
  }

  function onTextareaBlur() {
    if (contentOverLength) refName.current.focus();
  }

  return <div className="comments__create-textarea-wrap">
    <span className={`comments__label ${required ? "comments__label--required" : ""}`}>{label}</span>
    <div className="comments__field">
      <textarea
        value={content}
        className="comments__create-item-textarea"
        name="comment"
        id="comment-content"
        placeholder="Write some text …"
        ref={refName}
        onBlur={onTextareaBlur}
        onChange={onTextareaChange}
      >
      </textarea>
      <span
        className={`comments__length-counter ${contentOverLength ? "comments__length-counter--overlength" : ""}`}
      >
        {content.length}/{maxContentLen}
      </span>
    </div>
  </div>;
}