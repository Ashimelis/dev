import React, {useState} from 'react'


function MemberShip() {


  const [selectedValue, setSelectedValue] = useState("option1")
   const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };
  const handleRadioChange = (value) => {
    setSelectedValue(value)
  }
  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  return (
    <div className='w-full h-screen bg-gradient-to-r from-gray-600 to-white-100 shadow-2lg border-4 border-gray-300'>
      <div className='flex justify-center align-center  flex-row align-middle border-spacing-4 px-2 shadow-md'>
        <div className='inline justify-center align-middle'>
        <div></div>
        </div>
        <div>
          <label  className= 'ring-cyan-400' htmlFor='option1'>student</label>
          <input type='radio' id='option1' value='option1' checked={ selectedValue==="option1"} onChange={() => handleRadioChange("option1")}/> 
        </div>
        <div>
          <label className= 'ring-cyan-400' htmlFor='option3'>Farmers association </label>
          <input type='radio' id='option2' value='option2' checked={ selectedValue === "option2"}  onChange={() => handleRadioChange("option2")}/>
        </div>
        <div>
          <label className= 'ring-cyan-400' htmlFor='option4'> Business man</label>
          <input type='radio' id='option4' value='option4' checked={ selectedValue === "option4"}  onChange={() => handleRadioChange("option4")}/>
        </div>
        <div>
          <label className= 'ring-cyan-400' htmlFor='option5'>Professional association </label>
          <input type='radio' id='option5' value='option5' checked={ selectedValue === "option5"}  onChange={() => handleRadioChange("option5")}/>
        </div>
        <div className='flex justify-center align-middle'>
          <label>
        <input
          type="checkbox"
          checked={checkedOne}
          onChange={handleChangeOne}
        />
        New Member
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkedTwo}
          onChange={handleChangeTwo}
        />
        Existing Member
      </label>
        </div>
    </div>
      <div className='flex justify-center align-middle'>
        <iframes className='justify-center align-middle w-8% rounded-md shadow-inner shadow-gray-800 bg-white p-4 border-2 border-gray-300'>
          <p> Members registration</p>
          <form>
      <div className="mbsc-grid mbsc-grid-fixed">
        <div className="mbsc-form-group">
          <div className="mbsc-row mbsc-justify-content-center">
            <div className="mbsc-col-md-10 mbsc-col-xl-8 mbsc-form-grid">
              <div className="mbsc-form-group-title">Multiple columns grid</div>
              <div className="mbsc-row">
                <div className="mbsc-col-md-6 mbsc-col-12">
                  <input className='border shadow-inner shadow-gray-200 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' type="text" label="Email" placeholder="Email" inputStyle="box" labelStyle="floating" />
                </div>
                <div className="mbsc-col-md-6 mbsc-col-12">
                  <input className='border shadow-inner shadow-gray-200 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    type="password"
                    label="Password"
                    placeholder="Password"
                    passwordToggle={true}
                    inputStyle="box"
                    labelStyle="floating"
                  />
                </div>
              </div>
              <div className="mbsc-row">
                <div className="mbsc-col-12">
                  <input className='border shadow-inner shadow-gray-200 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' type="text" label="Address" placeholder="Address" inputStyle="box" labelStyle="floating" />
                </div>
              </div>
              <div className="mbsc-row">
                <div className="mbsc-col-md-6 mbsc-col-12">
                  <input type="text" label="City" placeholder="City" inputStyle="box" labelStyle="floating" />
                </div>
                <div className='flex flex-1 mbsc-col-md-6 mbsc-col-12 gap-2 justify-start items-center border-4 shadow-white-200 shadow-inner'>
                  <select className='bg-sky-300' label="Country" inputStyle="box" labelStyle="floating">
    <option className='bg-sky-100'>select country</option>
    <option value="AF">Afghanistan</option>
    <option value="AX">Åland Islands</option>
    <option value="AL">Albania</option>
    <option value="DZ">Algeria</option>
    <option value="AS">American Samoa</option>
    <option value="AD">Andorra</option>
    <option value="AO">Angola</option>
    <option value="AI">Anguilla</option>
    <option value="AQ">Antarctica</option>
    <option value="AG">Antigua and Barbuda</option>
    <option value="AR">Argentina</option>
    <option value="AM">Armenia</option>
    <option value="AW">Aruba</option>
    <option value="AU">Australia</option>
    <option value="AT">Austria</option>
    <option value="AZ">Azerbaijan</option>
    <option value="BS">Bahamas</option>
    <option value="BH">Bahrain</option>
    <option value="BD">Bangladesh</option>
    <option value="BB">Barbados</option>
    <option value="BY">Belarus</option>
    <option value="BE">Belgium</option>
    <option value="BZ">Belize</option>
    <option value="BJ">Benin</option>
    <option value="BM">Bermuda</option>
    <option value="BT">Bhutan</option>
    <option value="BO">Bolivia (Plurinational State of)</option>
    <option value="BA">Bosnia and Herzegovina</option>
    <option value="BW">Botswana</option>
    <option value="BV">Bouvet Island</option>
    <option value="BR">Brazil</option>
    <option value="IO">British Indian Ocean Territory</option>
    <option value="BN">Brunei Darussalam</option>
    <option value="BG">Bulgaria</option>
    <option value="BF">Burkina Faso</option>
    <option value="BI">Burundi</option>
    <option value="CV">Cabo Verde</option>
    <option value="KH">Cambodia</option>
    <option value="CM">Cameroon</option>
    <option value="CA">Canada</option>
    <option value="BQ">Caribbean Netherlands</option>
    <option value="KY">Cayman Islands</option>
    <option value="CF">Central African Republic</option>
    <option value="TD">Chad</option>
    <option value="CL">Chile</option>
    <option value="CN">China</option>
    <option value="CX">Christmas Island</option>
    <option value="CC">Cocos (Keeling) Islands</option>
    <option value="CO">Colombia</option>
    <option value="KM">Comoros</option>
    <option value="CG">Congo</option>
    <option value="CD">Congo, Democratic Republic of the</option>
    <option value="CK">Cook Islands</option>
    <option value="CR">Costa Rica</option>
    <option value="HR">Croatia</option>
    <option value="CU">Cuba</option>
    <option value="CW">Curaçao</option>
    <option value="CY">Cyprus</option>
    <option value="CZ">Czech Republic</option>
    <option value="CI">Côte d'Ivoire</option>
    <option value="DK">Denmark</option>
    <option value="DJ">Djibouti</option>
    <option value="DM">Dominica</option>
    <option value="DO">Dominican Republic</option>
    <option value="EC">Ecuador</option>
    <option value="EG">Egypt</option>
    <option value="SV">El Salvador</option>
    <option value="GQ">Equatorial Guinea</option>
    <option value="ER">Eritrea</option>
    <option value="EE">Estonia</option>
    <option value="SZ">Eswatini (Swaziland)</option>
    <option value="ET">Ethiopia</option>
    <option value="FK">Falkland Islands (Malvinas)</option>
    <option value="FO">Faroe Islands</option>
    <option value="FJ">Fiji</option>
    <option value="FI">Finland</option>
    <option value="FR">France</option>
    <option value="GF">French Guiana</option>
    <option value="PF">French Polynesia</option>
    <option value="TF">French Southern Territories</option>
    <option value="GA">Gabon</option>
    <option value="GM">Gambia</option>
    <option value="GE">Georgia</option>
    <option value="DE">Germany</option>
    <option value="GH">Ghana</option>
    <option value="GI">Gibraltar</option>
    <option value="GR">Greece</option>
    <option value="GL">Greenland</option>
    <option value="GD">Grenada</option>
    <option value="GP">Guadeloupe</option>
    <option value="GU">Guam</option>
    <option value="GT">Guatemala</option>
    <option value="GG">Guernsey</option>
    <option value="GN">Guinea</option>
    <option value="GW">Guinea-Bissau</option>
    <option value="GY">Guyana</option>
    <option value="HT">Haiti</option>
    <option value="HM">Heard Island and Mcdonald Islands</option>
    <option value="HN">Honduras</option>
    <option value="HK">Hong Kong</option>
    <option value="HU">Hungary</option>
    <option value="IS">Iceland</option>
    <option value="IN">India</option>
    <option value="ID">Indonesia</option>
    <option value="IR">Iran</option>
    <option value="IQ">Iraq</option>
    <option value="IE">Ireland</option>
    <option value="IM">Isle of Man</option>
    <option value="IL">Israel</option>
    <option value="IT">Italy</option>
    <option value="JM">Jamaica</option>
    <option value="JP">Japan</option>
    <option value="JE">Jersey</option>
    <option value="JO">Jordan</option>
    <option value="KZ">Kazakhstan</option>
    <option value="KE">Kenya</option>
    <option value="KI">Kiribati</option>
    <option value="KP">Korea, North</option>
    <option value="KR">Korea, South</option>
    <option value="XK">Kosovo</option>
    <option value="KW">Kuwait</option>
    <option value="KG">Kyrgyzstan</option>
    <option value="LA">Lao People's Democratic Republic</option>
    <option value="LV">Latvia</option>
    <option value="LB">Lebanon</option>
    <option value="LS">Lesotho</option>
    <option value="LR">Liberia</option>
    <option value="LY">Libya</option>
    <option value="LI">Liechtenstein</option>
    <option value="LT">Lithuania</option>
    <option value="LU">Luxembourg</option>
    <option value="MO">Macao</option>
    <option value="MK">Macedonia North</option>
    <option value="MG">Madagascar</option>
    <option value="MW">Malawi</option>
    <option value="MY">Malaysia</option>
    <option value="MV">Maldives</option>
    <option value="ML">Mali</option>
    <option value="MT">Malta</option>
    <option value="MH">Marshall Islands</option>
    <option value="MQ">Martinique</option>
    <option value="MR">Mauritania</option>
    <option value="MU">Mauritius</option>
    <option value="YT">Mayotte</option>
    <option value="MX">Mexico</option>
    <option value="FM">Micronesia</option>
    <option value="MD">Moldova</option>
    <option value="MC">Monaco</option>
    <option value="MN">Mongolia</option>
    <option value="ME">Montenegro</option>
    <option value="MS">Montserrat</option>
    <option value="MA">Morocco</option>
    <option value="MZ">Mozambique</option>
    <option value="MM">Myanmar (Burma)</option>
    <option value="NA">Namibia</option>
    <option value="NR">Nauru</option>
    <option value="NP">Nepal</option>
    <option value="NL">Netherlands</option>
    <option value="AN">Netherlands Antilles</option>
    <option value="NC">New Caledonia</option>
    <option value="NZ">New Zealand</option>
    <option value="NI">Nicaragua</option>
    <option value="NE">Niger</option>
    <option value="NG">Nigeria</option>
    <option value="NU">Niue</option>
    <option value="NF">Norfolk Island</option>
    <option value="MP">Northern Mariana Islands</option>
    <option value="NO">Norway</option>
    <option value="OM">Oman</option>
    <option value="PK">Pakistan</option>
    <option value="PW">Palau</option>
    <option value="PS">Palestine</option>
    <option value="PA">Panama</option>
    <option value="PG">Papua New Guinea</option>
    <option value="PY">Paraguay</option>
    <option value="PE">Peru</option>
    <option value="PH">Philippines</option>
    <option value="PN">Pitcairn Islands</option>
    <option value="PL">Poland</option>
    <option value="PT">Portugal</option>
    <option value="PR">Puerto Rico</option>
    <option value="QA">Qatar</option>
    <option value="RE">Reunion</option>
    <option value="RO">Romania</option>
    <option value="RU">Russian Federation</option>
    <option value="RW">Rwanda</option>
    <option value="BL">Saint Barthelemy</option>
    <option value="SH">Saint Helena</option>
    <option value="KN">Saint Kitts and Nevis</option>
    <option value="LC">Saint Lucia</option>
    <option value="MF">Saint Martin</option>
    <option value="PM">Saint Pierre and Miquelon</option>
    <option value="VC">Saint Vincent and the Grenadines</option>
    <option value="WS">Samoa</option>
    <option value="SM">San Marino</option>
    <option value="ST">Sao Tome and Principe</option>
    <option value="SA">Saudi Arabia</option>
    <option value="SN">Senegal</option>
    <option value="RS">Serbia</option>
    <option value="CS">Serbia and Montenegro</option>
    <option value="SC">Seychelles</option>
    <option value="SL">Sierra Leone</option>
    <option value="SG">Singapore</option>
    <option value="SX">Sint Maarten</option>
    <option value="SK">Slovakia</option>
    <option value="SI">Slovenia</option>
    <option value="SB">Solomon Islands</option>
    <option value="SO">Somalia</option>
    <option value="ZA">South Africa</option>
    <option value="GS">South Georgia and the South Sandwich Islands</option>
    <option value="SS">South Sudan</option>
    <option value="ES">Spain</option>
    <option value="LK">Sri Lanka</option>
    <option value="SD">Sudan</option>
    <option value="SR">Suriname</option>
    <option value="SJ">Svalbard and Jan Mayen</option>
    <option value="SE">Sweden</option>
    <option value="CH">Switzerland</option>
    <option value="SY">Syria</option>
    <option value="TW">Taiwan</option>
    <option value="TJ">Tajikistan</option>
    <option value="TZ">Tanzania</option>
    <option value="TH">Thailand</option>
    <option value="TL">Timor-Leste</option>
    <option value="TG">Togo</option>
    <option value="TK">Tokelau</option>
    <option value="TO">Tonga</option>
    <option value="TT">Trinidad and Tobago</option>
    <option value="TN">Tunisia</option>
    <option value="TR">Turkey (Türkiye)</option>
    <option value="TM">Turkmenistan</option>
    <option value="TC">Turks and Caicos Islands</option>
    <option value="TV">Tuvalu</option>
    <option value="UM">U.S. Outlying Islands</option>
    <option value="UG">Uganda</option>
    <option value="UA">Ukraine</option>
    <option value="AE">United Arab Emirates</option>
    <option value="GB">United Kingdom</option>
    <option value="US">United States</option>
    <option value="UY">Uruguay</option>
    <option value="UZ">Uzbekistan</option>
    <option value="VU">Vanuatu</option>
    <option value="VA">Vatican City Holy See</option>
    <option value="VE">Venezuela</option>
    <option value="VN">Vietnam</option>
    <option value="VG">Virgin Islands, British</option>
    <option value="VI">Virgin Islands, U.S</option>
    <option value="WF">Wallis and Futuna</option>
    <option value="EH">Western Sahara</option>
    <option value="YE">Yemen</option>
    <option value="ZM">Zambia</option>
    <option value="ZW">Zimbabwe</option>

                  </select>
                  <div className="mbsc-col-md-4 mbsc-col-6">
                  <select className='bg-sky-300' label="State" inputStyle="box" labelStyle="floating">
                    <option className='bg-sky-100'>select Region</option>
                    <option value="AA">Addis Ababa</option>
                    <option value="AM">Amahara</option>
                    <option value="OR">Oromia</option>
                    <option value="SE">South Ethiopia</option>
                    <option value="SWE">South West Ethiopia</option>
                    <option value="SD">Sidama</option>
                    <option value="CE">Centeral Ethiopia</option>
                    <option value="DD">Dere Dawa</option>
                    <option value="AF">Afar</option>
                    <option value="SM">Somalia</option>
                    <option value="TG">Tigray</option>
                    <option value="BG">Benishangul Gumuz</option>
                    <option value="HR">Harari</option>
                    <option value="GM">Gambela</option>
                  </select>
                </div>
                </div>
                
                <div className="mbsc-col-md-2 mbsc-col-6">
                  <input className='border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' type="text" label="Zip" placeholder="Zip" inputStyle="box" labelStyle="floating" />
                </div>
              </div>
              <button>Sign in</button>
            </div>
          </div>
        </div>
        <div className="mbsc-form-group">
          <div className="mbsc-row mbsc-justify-content-center">
            <div className="mbsc-col-sm-9 mbsc-col-md-7 mbsc-col-xl-5">
              <div className="mbsc-form-group">
                <div className="mbsc-form-group-title">Single column grid</div>
                <input className='border shadow-inner shadow-gray-200 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' label="First Name" placeholder="First Name" />
                <input className='border shadow-inner shadow-gray-200 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' label="Last Name" placeholder="Last Name" />
                <input className='border shadow-inner shadow-gray-200 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' label="User Name" placeholder="User Name" />
                <input className='border shadow-inner shadow-gray-200 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' label="Company" placeholder="Company Name" />
                <input className='border shadow-inner shadow-gray-200shadow-inner shadow-gray-200  border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' label="Email" placeholder="Email Address" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
          

        </iframes>
      </div>
      <div>

      </div>
    </div>
  )
}

export default MemberShip