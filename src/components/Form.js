import React from "react";
import { formFields } from "../json/Json";
import "./css/form.css";
import { styles } from "./css/style";
import Cleave from "cleave.js/react";

function Form({ getData }) {
  return (
    <>
      <form className="d-flex justify-content-center align-items-center h-100 w-100">
        <div
          className="ml-5 position-relative"
          style={{ width: "350px", left: "5%" }}
        >
          {formFields.map((el, index) => (
            <div className="mb-4" key={index}>
              <label
                className="form-label"
                style={{
                  fontSize: styles.fontSize,
                  fontVariant: styles.fontVariant,
                }}
              >
                {el.label}
              </label>
              {el.type === "text" ? (
                <input
                  type={el.type}
                  className="form-control rounded-3"
                  style={{ borderColor: styles.borderColor }}
                  onChange={(e) =>
                    getData("fullName", e.target.value.toUpperCase())
                  }
                />
              ) : (
                <Cleave
                  options={{ creditCard: true }}
                  style={{ borderColor: styles.borderColor }}
                  className="form-control rounded-3"
                  onChange={(e) => getData("cardNumber", e.target.value)}
                />
              )}
            </div>
          ))}
          <div className="row g-0 gap-4">
            <div className="row col g-0">
              <label
                className="form-label"
                style={{
                  fontSize: styles.fontSize,
                  fontVariant: styles.fontVariant,
                }}
              >
                exp. date (mm/yy)
              </label>
              <div className="row gap-3">
                <input
                  style={{ borderColor: styles.borderColor }}
                  className="col form-control rounded-3"
                  type="text"
                  onChange={(e) => getData("ExpDateMonth", e.target.value)}
                  maxLength="2"
                />
                <input
                  style={{ borderColor: styles.borderColor }}
                  className="col form-control rounded-3"
                  type="text"
                  onChange={(e) => getData("ExpDateYears", e.target.value)}
                  maxLength="2"
                />
              </div>
            </div>
            <div className="col">
              <label
                className="form-label"
                style={{
                  fontSize: styles.fontSize,
                  fontVariant: styles.fontVariant,
                }}
              >
                cvc
              </label>
              <input
                className="form-control rounded-3"
                type="text"
                maxLength="3"
                style={{ borderColor: styles.borderColor }}
              />
            </div>
          </div>
          <button
            style={{
              fontSize: styles.fontSize,
              backgroundColor: "hsl(278, 68%, 11%)",
            }}
            className="btn btn-primary mt-4 d-block w-100 roundend-3 border-0"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
