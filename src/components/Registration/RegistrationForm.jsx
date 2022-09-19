import { useState } from "react"
import CountryCodes from "../../data/country-codes.json"
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri"
import { motion } from "framer-motion"

function RegistrationForm() {
  const [isEmail, setIsEmail] = useState(true)
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const variants = {
    visible: { translateY: 0, opacity: 1 },
    hidden: { translateY: 50, opacity: 0 },
  }
  const countrycodes = CountryCodes.map((country, key) => (
    <option
      value={country.dial_code}
      key={key}
    >{`${country.code} ${country.dial_code}`}</option>
  ))

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_code: "+63",
    phone_number: "",
    birth_month: "",
    birth_day: "",
    birth_year: "",
    password: "",
    subscribe: false,
  })

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    // checking value of formData
    // console.log(formData)
  }

  return (
    <motion.div
      className="signup-container"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ delay: 0.5 }}
    >
      <div className="signup--header">
        <h2>Sign up</h2>
        <h5>Discover our products and features</h5>
      </div>
      <div className="signup--form">
        <form onSubmit={handleSubmit}>
          <div className="form--row">
            <h4>What's your name?</h4>
            <div className="form--input name">
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First name"
                onChange={handleChange}
                value={formData.firstname}
              />
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last name"
                onChange={handleChange}
                value={formData.lastname}
              />
            </div>
          </div>
          <div className="form--row ">
            <div className="email-header">
              <h4>What's your email address?</h4>
              <h6 onClick={() => setIsEmail(!isEmail)}>
                {isEmail ? "Sign up with phone" : "Sign up with email"}
              </h6>
            </div>

            <div className="form--input phone-email">
              {isEmail ? (
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.email}
                />
              ) : (
                <>
                  <select
                    name="phone_code"
                    id="phone_code"
                    onChange={handleChange}
                    defaultValue={formData.phone_code}
                  >
                    {countrycodes}
                  </select>
                  <input
                    type="number"
                    name="phone_number"
                    id="phone_number"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    value={formData.phone_number}
                  />
                </>
              )}
            </div>
          </div>
          <div className="form--row">
            <h4>When's your birthday?</h4>
            <div className="form--input bday">
              <select
                name="birth_month"
                id="birth_month"
                placeholder="Month"
                onChange={handleChange}
                defaultValue={formData.birth_month}
              >
                <option value="month">Month</option>
              </select>
              <select
                name="birth_day"
                id="birth_day"
                placeholder="Day"
                onChange={handleChange}
                defaultValue={formData.birth_day}
              >
                <option value="day">Day</option>
              </select>
              <select
                name="birth_year"
                id="birth_year"
                placeholder="Year"
                onChange={handleChange}
                defaultValue={formData.birth_year}
              >
                <option value="year">Year</option>
              </select>
            </div>
            <h6 className="input-msg">Your birthday won't be shown publicly</h6>
          </div>
          <div className="form--row">
            <h4>Your password</h4>
            <div className="form--input password-input">
              <input
                type={isPasswordShown ? "password" : "text"}
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                checked={formData.subscribe}
              />
              {isPasswordShown ? (
                <RiEyeLine
                  className="password-eye"
                  onClick={() => setIsPasswordShown(!isPasswordShown)}
                />
              ) : (
                <RiEyeOffLine
                  className="password-eye"
                  onClick={() => setIsPasswordShown(!isPasswordShown)}
                />
              )}
            </div>
          </div>
          <div className="form--row">
            <div className="form--input subscribe">
              <input
                type="checkbox"
                name="subscribe"
                id="subscrible"
                onChange={handleChange}
                value={formData.subscribe}
              />
              <label htmlFor="subscrible">
                Get the latest content, newsletters, promotions,
                recommendations, and account updates sent to your email.
              </label>
            </div>
          </div>

          <div className="form--row">
            <div className="form--input">
              <button>Submit</button>
              <p>
                By continuing, you agree to Test’s Terms of Service and confirm
                that you have read the Test’s Privacy Policy.
              </p>
            </div>
          </div>
        </form>
        <div className="signup-footer">
          <hr />
          <h4>
            Already have an account? <a href="#"> Sign in</a>
          </h4>
        </div>
      </div>
    </motion.div>
  )
}

export default RegistrationForm
