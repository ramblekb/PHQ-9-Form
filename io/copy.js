Formio.createForm(document.getElementById('guide'),
   {
      "display": "form",
      "settings": {
         "pdf": {
            "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
            "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
         }
      },
      "components": [
         {
            "label": "HTML",
            "tag": "h1",
            "attrs": [
               {
                  "attr": "",
                  "value": ""
               }
            ],
            "content": "Patient Health Questionnaire (PHQ)",
            "refreshOnChange": false,
            "key": "html",
            "type": "htmlelement",
            "input": false,
            "tableView": false
         },
         {
            "html":  <div id="formio"></div> <div id="formio"></div>
         },
         {
            "html": "<p>Each question is answered on a sliding scale of 0 to 4. The maximum total score is 27.&nbsp;</p><p><span class=\"text-small\">0 - Not at all</span></p><p><span class=\"text-small\">1 - Several days</span></p><p><span class=\"text-small\">2 - More than half the days&nbsp;</span></p><p><span class=\"text-small\">3 - Nearly every day</span></p>",
            "label": "Interpretation of Results",
            "refreshOnChange": false,
            "key": "phq10",
            "type": "content",
            "input": false,
            "tableView": false
         },
         {
            "html": "<figure class=\"table\"><table><thead><tr><th>Total Score</th><th>Depression Severity</th><th>Proposed Treatment Actions</th></tr></thead><tbody><tr><td>0-4</td><td>None to Minimal</td><td><span style=\"color:#9aa83a;\">No proposed treatment actions.</span></td></tr><tr><td>5-9</td><td>Mild&nbsp;</td><td>Treatment based on the duration and severity of symptoms. Schedule a follow up to take the PHQ-9 again in two weeks.</td></tr><tr><td>10-14</td><td>Moderate</td><td>Healthcare providers can use their clinical judgment and knowledge of the patient to determine a course of treatment. <span style=\"color:#9aa83a;\">Consider discussion of additional support such as pharmacotherapy.</span></td></tr><tr><td>15-19</td><td>Moderately Severe&nbsp;</td><td>This generally warrants treatment for depression using medication, therapy, or a combination of the two.</td></tr><tr><td>20-27</td><td>Severe</td><td>This warrants treatment for depression using medication and therapy. <span style=\"color:#9aa83a;\">Adjust treatment plan; focus assessment of safety plan and pharmacotherapy evaluation.&nbsp;</span></td></tr></tbody></table></figure>",
            "label": "Content",
            "refreshOnChange": false,
            "key": "content",
            "type": "content",
            "input": false,
            "tableView": false
         }
      ]

   }).then((data) => {
      console.log(stringifyJSON(data));
      window.localStorage.setItem(key, JSON.stringify(data));

   });

