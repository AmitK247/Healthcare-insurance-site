import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../img/Repeat_Grid_5.png';
import image1 from '../../img/Icon_feather-check-circle.png';
import image2 from '../../img/Icon_feather-clock.png';

const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');



function createDataset() {

   
  console.log('createDataset function called');

  // Get form values
  const beneficiaryId = document.getElementById('beneficiaryId').value;
  const age = parseInt(document.getElementById('age').value);
  const physician = document.getElementById('physician').value;
  const admittedDays = parseInt(document.getElementById('admittedDays').value);
  const claimAmount = parseInt(document.getElementById('claimAmount').value);
  // const renalDisease = checkboxValues.renalDisease;
  // const alzheimer = checkboxValues.alzheimer;
  const HeartFail = document.getElementById('HeartFail').value;
  const kidneyDisease = document.getElementById('kidneyDisease').value;
  const cancer = document.getElementById('cancer').value;
  const Pulmonary = document.getElementById('Pulmonary').value;
  const stroke = document.getElementById('stroke').value;
  const osteoporosis = document.getElementById('osteoporosis').value;
  const ischemicHeart = document.getElementById('ischemicHeart').value;
  const diabetes = document.getElementById('diabetes').value;

  // Create a dataset object
  const dataset = [{
      "BeneID": beneficiaryId,
      "Age": age,
      "ClaimAmt":claimAmount,
      "AttendingPhysician": physician,
      "AdmitForDays": admittedDays,
      // "RenalDiseaseIndicator": renalDisease,
      // "ChronicCond_Alzheimer": alzheimer,
      "ChronicCond_HeartFailure": HeartFail,
      "ChronicCond_KidneyDisease": kidneyDisease,
      "ChronicCond_Cancer": cancer,
      "ChronicCond_ObstrPulmonary": Pulmonary,
      "ChronicCond_Stroke": stroke,
      "ChronicCond_Osteoporosis": osteoporosis,
      "ChronicCond_IschemicHeart": ischemicHeart,
      "ChronicCond_Diabetes": diabetes
  }];





  console.log(dataset);}

const Claims = () => {
  
  // const [checkboxValues, setCheckboxValues] = useState({
  //   renalDisease: 0,
  //   alzheimer: 0,
  //   HeartFail: 0,
  //   kidneyDisease: 0,
  //   cancer: 0,
  //   Pulmonary: 0,
  //   stroke: 0,
  //   osteoporosis: 0,
  //   ischemicHeart: 0,
  //   diabetes: 0,
  // });

  // // Handle checkbox change event
  // const handleCheckboxChange = (event) => {
  //   const { id, checked } = event.target;
  //   const updatedValues = {
  //     ...checkboxValues,
  //     [id]: checked ? 1 : 0,
  //   };
  //   setCheckboxValues(updatedValues);
  //   console.log(updatedValues);
  //   createDataset(checkboxValues);
   
  // };

  // Handle form submission






  return (

      <div className='insure '>
        <h1 className='motto text-center '>
          You need not face the impending alone
        </h1>
        <p className='saying text-center my-4'>
          Claims are handled by our AI and our fantastic team.
          <br />
          File for a claim and blink, we’re there.
        </p>
        
        <div className='claim '> 
            <div class="register2">
            <div class="register1">
            
          <form id="myForm" >
          <label for="beneficiaryId">Beneficiary ID:</label>
          <input class ="cl" type="text" id="beneficiaryId" />
          <label class="cl" for="age"> Age:</label>
          <input type="number" id="age" class="cl" /><br></br>

      {/* <input type="number" id="age" value={age} onChange={event => setAge(event.target.value)} />
    <label for="medA">Medication A:</label>
    <input class = "cl" type="number" id="medA" name="medA"></input><br></br><br></br>
    <label for="medB">Medication B:</label>
    <input class = "cl" type="number" id="medB" name="medB"></input><br></br><br></br>
    <label for="medC">Medication C:</label>
    <input class = "cl" type="number" id="medC" name="medC"></input><br></br><br></br>
    <label for="medD">Medication D:</label>
    <input class = "cl" type="number" id="medD" name="medD"></input><br></br><br></br> */}
    <label  for="claimAmount">Claim Amount:</label>
    <input class = "cl" type="number" id="claimAmount" name="claimAmount"></input>
    <label  for="p">Physician: </label>
    <select  class = "insure2" id="physician" >
      <option value="PHY405682">PHY405682</option>
      <option value="PHY383007">PHY383007</option>
    </select><p></p>
    <label for="admittedDays">Admitted for days:</label>
      <input type="number" id="admittedDays" class ="cl"/><br></br>
      {/* <label>Select Diseases:</label><br></br>
      <label for="RD"> RenalDisease: </label>
      <select  class = "insure2" id="physician01" >
      <option value="0">0</option>
      <option value="1">1</option>
    </select>
      <label for="al"> alzheimer: </label>
      <select  class = "insure2" id="physician1" >
      <option value="0">0</option>
      <option value="1">1</option>
    </select><br></br>
      <label for="hf"> HeartFail: </label>
      <select  class = "insure2" id="physician2" >
      <option value="0">0</option>
      <option value="1">1</option>
    </select>
      <label for ="k"> kidneyDisease: </label>
      <select  class = "insure2" id="physician3" >
      <option value="0">0</option>
      <option value="1">1</option>
    </select><br></br>
      <label for ="c"> cancer: </label>
      <select  class = "insure2" id="physician4" >
      <option value="0">0</option>
      <option value="1">1</option>
    </select>
      <label for="pu">Pulmonary: </label>
      <select  class = "insure2" id="physician5" >
      <option value="0">0</option>
      <option value="1">1</option>
    </select><br></br>
      <label for="s"> stroke: </label>
      <select  class = "insure2" id="physician7" >
      <option value="0">0</option>
      <option value="1">1</option>
    </select>
      <label for ="o"> osteoporosis: </label>
      <select  class = "insure2" id="physician8" >
      <option value="0">0</option>
      <option value="1">1</option>
    </select><br></br>
      <label for ="i"> ischemicHeart: </label>
      <select  class = "insure2" id="physician9" >
      <option value="0">0</option>
      <option value="1">1</option>
    </select>
      <label for="d"> diabetes </label>
      <select  class = "insure2" id="physician10" >
      <option value="0">0</option>
      <option value="1">1</option>
    </select><br></br> */}
    <label>Select Diseases:</label><br></br>
      <label><input type="checkbox" id="renalDisease"  /> RenalDisease </label><br></br>
      <label><input type="checkbox" id="alzheimer"  /> alzheimer </label><br></br>
      <label><input type="checkbox" id="HeartFail"  /> HeartFail </label><br></br>
      <label><input type="checkbox" id="kidneyDisease"  /> kidneyDisease </label><br></br>
      <label><input type="checkbox" id="cancer"  /> cancer </label><br></br>
      <label><input type="checkbox" id="Pulmonary"  /> Pulmonary </label><br></br>
      <label><input type="checkbox" id="stroke"  /> stroke </label><br></br>
      <label><input type="checkbox" id="osteoporosis"  /> osteoporosis </label><br></br>
      <label><input type="checkbox" id="ischemicHeart"  /> ischemicHeart </label><br></br>
      <label><input type="checkbox" id="diabetes"  /> diabetes </label><br></br>
      <label for="ipAnnualReimbursementAmt"> IpAnnualReimbursementAmt:</label>
      <input type="number" id="ipAnnualReimbursementAmt" class="cl"/><br></br>
      <label for="ipAnnualDeductibleAmt"> IpAnnualDeductibleAmt:</label>
      <input type="number" id="ipAnnualDeductibleAmt" class="cl"/><br></br>
      <label htmlFor="opAnnualReimbursementAmt"> OpAnnualReimbursementAmt:</label>
      <input type="number" id="opAnnualReimbursementAmt" class="cl"/><br></br>
      <label htmlFor="opAnnualDeductibleAmt"> OpAnnualDeductibleAmt:</label>
      <input type="number" id="opAnnualDeductibleAmt" class="cl"/><br></br>








    <input type="button" value="Submit" id="submitButton"></input>
  </form><p></p>
          </div>
        </div>
        <p></p><br></br>
        </div>
        
        </div>

  );
};
// document.addEventListener('DOMContentLoaded', function() {
//   // Add event listener to the submit button
//   document.getElementById('submitButton').addEventListener('click', createDataset);});
export default Claims;

