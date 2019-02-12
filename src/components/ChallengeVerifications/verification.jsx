import React, { Component } from "react";

import request from "../../helpers/request";

import Button from "../Button";
import Td from "../Table/Td";

import DIET from "./img/i-challenge-diet@2x.png";
import FEEDBACK_GOOD from "./img/i-feedback-good@2x.png";
import FEEDBACK_NEUTRAL from "./img/i-feedback-neutral@2x.png";
import FEEDBACK_BAD from "./img/i-feedback-bad@2x.png";
import DELTA_DOWN from "./img/i-delta-down_good@2x.png";
import DELTA_UP from "./img/i-delta-up_bad@2x.png";
import styles from "./styles.less";

class Verification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedback: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.get_delta = this.get_delta.bind(this);
    this.get_feedback_img = this.get_feedback_img.bind(this);
    this.get_verification_value = this.get_verification_value.bind(this);
    this.approveVerification = this.approveVerification.bind(this);
    this.rejectVerification = this.rejectVerification.bind(this);
  }

  handleChange(e) {
    this.setState({ feedback: e.target.value });
  }

  get_feedback_img(verification) {
    if (verification.user_feedback === "good") {
      return FEEDBACK_GOOD;
    } else if (verification.user_feedback === "neutral") {
      return FEEDBACK_NEUTRAL;
    } else {
      return FEEDBACK_BAD;
    }
  }

  get_delta(verification) {
    let delta =
      verification.value -
      (verification.user_challenge.initial_metric -
        verification.user_challenge.progress);
    const style = delta > 0 ? "green" : "red";
    const delta_img = delta > 0 ? DELTA_DOWN : DELTA_UP;
    delta = delta > 0 ? delta : delta * -1;

    return [delta, style, delta_img];
  }

  get_verification_value(verification) {
    if (verification.unit_system == verification.user_challenge.unit_system) {
      const unit_system = verification.unit_system ? "kg" : "lb";
      return [unit_system, verification.value];
    } else {
      const unit_system = verification.unit_system ? "kg" : "lb";
      // Si el verification.unit_system viene en falso quiere decir que
      // hay que pasar de libras a kilos.
      // Si viene en true quiere decir que el user_challenge esta en false y hay que
      // pasar de kilos a libras
      let value = verification.unit_system
        ? 2.2 * verification.value
        : verification.value * 0.453592;
      value = Math.round(value);

      return [unit_system, value];
    }
  }

  approveVerification() {
    const { remove_verification, verification } = this.props;
    const data = {
      verification: { result: "approve", verifier_comment: this.state.feedback }
    };

    request(`/challenge-verifications/${verification.id}`, {
      method: "PATCH",
      data
    })
      .then(() => {
        remove_verification(verification.id);
        alert("aprovado");
      })
      .catch(() => {
        alert("Server Error");
      });
  }

  rejectVerification() {
    const { remove_verification, verification } = this.props;
    const data = {
      verification: { result: "reject", verifier_comment: this.state.feedback }
    };

    request(`/challenge-verifications/${verification.id}`, {
      method: "PATCH",
      data
    })
      .then(() => {
        remove_verification(verification.id);
        alert("aprovado");
      })
      .catch(() => {
        alert("Server Error");
      });
  }

  render() {
    const { verification } = this.props;
    const [delta, delta_style, delta_img] = this.get_delta(verification);
    const [unit_system, value] = this.get_verification_value(verification);
    const disabled = this.state.feedback.length ? false : true;

    return (
      <div>
        <Td>
          <p className={styles["user-name"]}>
            {verification.user_name}{" "}
            <span className={styles["user-id"]}>#{verification.user_id}</span>
          </p>
          {verification.user_challenge.initial_metric == null ? (
            <div className={styles["user-challenge-info"]}>
              <p className={styles["first-verification"]}>First Verification</p>
              <p style={{ margin: "0 30px 0 70px" }}>
                <span className={styles["white-label-bold"]}>
                  {verification.user_challenge.periods_left}
                </span>
                <span className={styles["gray-label"]}> weeks left</span>
              </p>
            </div>
          ) : (
            <div id="with-initial-metric">
              <div>
                <p className={styles.value}>
                  {value}{" "}
                  <span className={styles["value-system"]}>{unit_system}</span>
                </p>
                <div id="challenge-info" className={styles["challenge-info"]}>
                  <img className={styles.delta} src={delta_img} />
                  <span
                    className={styles[delta_style]}
                    style={{ margin: "0 0 0 3px" }}
                  >
                    {delta}
                  </span>
                  <img
                    style={{ margin: "0 5px 0 20px" }}
                    className={styles.diet}
                    src={DIET}
                  />
                  <img
                    className={styles.feedback}
                    src={this.get_feedback_img(verification)}
                  />
                </div>
              </div>

              <div className={styles["user-challenge-info"]}>
                <p>
                  <span className={styles["gray-label"]}>Goal: </span>
                  <span className={styles["white-label-bold"]}>
                    {verification.user_challenge.initial_metric -
                      verification.user_challenge.goal}
                  </span>
                  <span className={styles["white-label"]}> lb</span>
                </p>
                <p>
                  <span className={styles["white-label-bold"]}>
                    {verification.user_challenge.periods_left}
                  </span>
                  <span className={styles["gray-label"]}> weeks left</span>
                </p>
                <p>
                  <span className={styles["gray-label"]}>Initial: </span>
                  <span className={styles["white-label-bold"]}>
                    {verification.user_challenge.initial_metric}
                  </span>
                  <span className={styles["white-label"]}> lb</span>
                </p>
              </div>
            </div>
          )}

          <textarea
            onChange={this.handleChange}
            className={styles["feedback-box"]}
            cols="50"
            rows="4"
            placeholder={"Comentario en Español (Opcional)"}
          />
        </Td>
        <Td>
          <Button
            loading={false}
            color="green"
            size="normal"
            onClick={this.approveVerification}
          >
            Approve
          </Button>
          <p />
          <Button
            loading={false}
            color="red"
            size="normal"
            disabled={disabled}
            onClick={this.rejectVerification}
          >
            Reject
          </Button>
        </Td>
      </div>
    );
  }
}

export default Verification;
