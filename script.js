Survey
   .StylesManager
   .applyTheme("modern");

var json = {
   title: "Patient Health Questionnaire (PHQ)",
   showProgressBar: "bottom",
   showQuestionNumber: "false",
   goNextPageAutomatic: true,
   showNavigationButtons: true,
   pages: [

      {
         questions: [
            {
               type: "html",
               name: "info",
               title: "Instructions",
               html: "<body><h1>Welcome</h1><p>The PHQ-9 is a 9-question instrument given to individuals in order to screen for the presence and severity of depression It is the 9-question depression scale from the Patient Health Questionnaire (PHQ).The results of the PHQ-9 may be used to make a depression diagnosis according to DSM-IV criteria and takes less than 3 minutes to complete. The total of all 9 responses from the PHQ-9 aims to predict the presence and severity of depression. Primary care providers frequently use the PHQ-9 to screen for depression in patients.</p ><h6>*All questions are meant to be answered relative to the past two weeks answered by degree.</h6><p>0=Not at all  1=Several days  2=More than half the days  3=Nearly every day</p><p><a href=\"https://en.wikipedia.org/wiki/Patient_Health_Questionnaire\">Patient Health Questionnaire (PHQ) </a>is a 9-question instrument given to individuals in order to screen for the presence and severity of depression according to&nbsp;<a href=\"https://en.wikipedia.org/wiki/Diagnostic_and_Statistical_Manual_of_Mental_Disorders\">DSM-IV</a>&nbsp;criteria. The survey takes less than 3 minutes to complete. The total of all 9 questions are evaluated to predict the presence and severity of depression.&nbsp;</p></body > "
            }
         ]
      },
      {
         questions: [
            {
               type: "html",
               name: "info",
               title: "Interpretation of Results",
               html: "<table><body><h1>Answer Options</h1><p>The maximum score is 27. Answer options range from 0 to 4. The sum of your input is tallied and compared to the PHQ-9 Key.</p><p>0=Not at all  1=Several days  2=More than half the days  3=Nearly every day</p></body></table><figure class=\"table\"><table><h3>Interpretation of Results</h3><thead><tr><th>Total Score</th><th>Depression Severity</th><th>Proposed Treatment Actions</th></tr></thead><tbody><tr><td>0-4</td><td>None to Minimal</td><td><span>No proposed treatment actions.</span></td></tr><tr><td>5-9</td><td>Mild&nbsp;</td><td>Treatment based on the duration and severity of symptoms. Schedule a follow up to take the PHQ-9 again in two weeks.</td></tr><tr><td>10-14</td><td>Moderate</td><td>Healthcare providers can use their clinical judgment and knowledge of the patient to determine a course of treatment. <span>Consider discussion of additional support such as pharmacotherapy.</span></td></tr><tr><td>15-19</td><td>Moderately Severe&nbsp;</td><td>This generally warrants treatment for depression using medication, therapy, or a combination of the two.</td></tr><tr><td>20-27</td><td>Severe</td><td>This warrants treatment for depression using medication and therapy. <span>Adjust treatment plan; focus assessment of safety plan and pharmacotherapy evaluation.&nbsp;</span></td></tr></tbody><h6>*All questions are meant to be answered relative to the past two weeks.</h6></table></figure><h6>*All questions are meant to be answered relative to the past two weeks.</h6>"
            }
         ]
      },
      {
         questions: [
            {
               type: "html",
               name: "info",
               title: "Next page",
               html: "<p>On the next page you will start the survey remember to answer in regards to the past two weeks</p><h5>Over the last two weeks, how often have you been bothered by any of the following problems?</h5>The survey takes less than 3 minutes to complete a total of 9 questions. On the last page we will review your results.</p><p>for more information on the PHQ-9 Form follow the links</p><a href=\"https://en.wikipedia.org/wiki/Diagnostic_and_Statistical_Manual_of_Mental_Disorders\"></a>"
            }
         ]
      },

   ],
   completedHtml: "<button><a href=\"../formTwo/index.html\">Click to Start Survey</a></button>",
};

window.survey = new Survey.Model(json);

survey
   .onComplete
   .add(function (sender) {
      document
         .querySelector('#surveyResults')
         .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
   });

survey.render("surveyElement");


