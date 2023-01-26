import React from "react";

export default function Alert(props) {
    const capitalize = (text) => {
        return text[0].toUpperCase() + text.slice(1).toLowerCase()
    }

  return (
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>{": " + props.alert.message}
      </div>
    );
}
