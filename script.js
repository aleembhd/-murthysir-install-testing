const students = [
  { rollNumber: "23WJ1A04H2", name: "PASUNURI ANIL KUMAR", parentPhone: "7793900219", parentName: "", studentPhone: "6304800219" },
  { rollNumber: "23WJ1A04H4", name: "PILLY MANOJ KANNA", parentPhone: "9866706797", parentName: "", studentPhone: "6301628639" },
  { rollNumber: "23WJ1A04H5", name: "POGULA AKASH", parentPhone: "9533662110", parentName: "", studentPhone: "8106467585" },
  { rollNumber: "23WJ1A04H6", name: "POLE SIDDARTHA", parentPhone: "9951706866", parentName: "", studentPhone: "9346108934" },
  { rollNumber: "23WJ1A04H7", name: "PUPPALA CHARAN TEJ", parentPhone: "9848123877", parentName: "", studentPhone: "9652044935" },
  { rollNumber: "23WJ1A04H8", name: "RAMASWAMY CHANDRA VARDHAN GOUD", parentPhone: "8520889878", parentName: "", studentPhone: "7981871144" },
  { rollNumber: "23WJ1A04H9", name: "RAMAVATH SRIVANI", parentPhone: "9908863991", parentName: "", studentPhone: "7601090601" },
  { rollNumber: "23WJ1A04J0", name: "RAMKOTI YOGESH", parentPhone: "9491745469", parentName: "", studentPhone: "9492915198" },
  { rollNumber: "23WJ1A04J1", name: "RAPELLI RUSHI VARDHAN", parentPhone: "8328025933", parentName: "", studentPhone: "6304902583" },
  { rollNumber: "23WJ1A04J2", name: "RATLAVATH SHIRISHA", parentPhone: "7989653818", parentName: "", studentPhone: "6304183199" },
  { rollNumber: "23WJ1A04J3", name: "RAVULA NARESH", parentPhone: "9618967811", parentName: "", studentPhone: "8688503315" },
  { rollNumber: "23WJ1A04J4", name: "RENUKUNTA MANIKANTA", parentPhone: "9703298523", parentName: "", studentPhone: "7569438026" },
  { rollNumber: "23WJ1A04J5", name: "REPAKA VIKESH", parentPhone: "9440680238", parentName: "", studentPhone: "9573356025" },
  { rollNumber: "23WJ1A04J6", name: "RUDRA THARUN", parentPhone: "7815806651", parentName: "", studentPhone: "6305242325" },
  { rollNumber: "23WJ1A04J7", name: "SABAVAT ROHITH", parentPhone: "9014862500", parentName: "", studentPhone: "9963986104" },
  { rollNumber: "23WJ1A04J8", name: "SABHAVATH RAJENDAR", parentPhone: "9492185530", parentName: "", studentPhone: "9390371405" },
  { rollNumber: "23WJ1A04J9", name: "SANJEEV YOGESH", parentPhone: "8466003877", parentName: "", studentPhone: "7569298592" },
  { rollNumber: "23WJ1A04K0", name: "SANTHAPURI SAMPATH", parentPhone: "9030418307", parentName: "", studentPhone: "6302390168" },
  { rollNumber: "23WJ1A04K1", name: "SATAKOLLA RAKSHITHA", parentPhone: "9949467974", parentName: "", studentPhone: "8179267975" },
  { rollNumber: "23WJ1A04K2", name: "SEEPELLI AKSHITHA", parentPhone: "9951413572", parentName: "", studentPhone: "7997150997" },
  { rollNumber: "23WJ1A04K3", name: "SHAIK IBRAHIM", parentPhone: "7329067160", parentName: "", studentPhone: "9392859490" },
  { rollNumber: "23WJ1A04K4", name: "SHAIK SAMEER BABA", parentPhone: "9701771795", parentName: "", studentPhone: "7893362332" },
  { rollNumber: "23WJ1A04K5", name: "SINDAM SHIVA KUMAR", parentPhone: "9010263721", parentName: "", studentPhone: "8500057831" },
  { rollNumber: "23WJ1A04K6", name: "SOFIYA", parentPhone: "9948989935", parentName: "", studentPhone: "8885002412" },
  { rollNumber: "23WJ1A04K7", name: "SOMANAPALLI DHANUSH", parentPhone: "9948796464", parentName: "", studentPhone: "6302046416" },
  { rollNumber: "23WJ1A04K8", name: "SOUTABAI SIMHADRI", parentPhone: "9701260907", parentName: "", studentPhone: "6301686826" },
  { rollNumber: "23WJ1A04K9", name: "SRIPAL KOTHA", parentPhone: "9666724816", parentName: "", studentPhone: "8187072159" },
  { rollNumber: "23WJ1A04L0", name: "SUDARSHANAM SATYA HASINI", parentPhone: "9866017704", parentName: "", studentPhone: "8341513727" },
  { rollNumber: "23WJ1A04L1", name: "SUNKARI SHARAN TEJA", parentPhone: "9951417825", parentName: "", studentPhone: "7680884791" },
  { rollNumber: "23WJ1A04L2", name: "SURA MANISHA", parentPhone: "6304159972", parentName: "", studentPhone: "9951895179" },
  { rollNumber: "23WJ1A04L3", name: "SURA VENKATESH", parentPhone: "9912294643", parentName: "", studentPhone: "8463905052" },
  { rollNumber: "23WJ1A04L5", name: "SURABHI MADHAVI", parentPhone: "9959099253", parentName: "", studentPhone: "9494374183" },
  { rollNumber: "23WJ1A04L6", name: "SURARAM RAMYA", parentPhone: "9553559766", parentName: "", studentPhone: "8801844433" },
  { rollNumber: "23WJ1A04L7", name: "SURATHANI VASANTH REDDY", parentPhone: "9666304333", parentName: "", studentPhone: "9989832855" },
  { rollNumber: "23WJ1A04L8", name: "SURISETTI NAGENDRA BABU", parentPhone: "8099999888", parentName: "", studentPhone: "9182368340" },
  { rollNumber: "23WJ1A04L9", name: "SYED SALEEM", parentPhone: "9491395665", parentName: "", studentPhone: "9121892686" },
  { rollNumber: "23WJ1A04M0", name: "TEEGALA SAIGANGA", parentPhone: "9182454909", parentName: "", studentPhone: "6281485889" },
  { rollNumber: "23WJ1A04M1", name: "TEKULA SRITEJA", parentPhone: "9912779037", parentName: "", studentPhone: "7842271112" },
  { rollNumber: "23WJ1A04M2", name: "TELLABOINA NAVYA SRI", parentPhone: "9866405279", parentName: "", studentPhone: "7893230758" },
  { rollNumber: "23WJ1A04M3", name: "THEJAVATH RAVINDAR", parentPhone: "9640929035", parentName: "", studentPhone: "9347098196" },
  { rollNumber: "23WJ1A04M4", name: "THOTA SRAVAN PATEL", parentPhone: "9030169471", parentName: "", studentPhone: "8008043911" },
  { rollNumber: "23WJ1A04M5", name: "THOTTEMPUDI HARISURYA", parentPhone: "9705388998", parentName: "", studentPhone: "7997145448" },
  { rollNumber: "23WJ1A04M6", name: "THUMU SHASHANK", parentPhone: "9000570184", parentName: "", studentPhone: "9963474184" },
  { rollNumber: "23WJ1A04M7", name: "UDAYA SAI NITHIN", parentPhone: "9493411881", parentName: "", studentPhone: "7989596788" },
  { rollNumber: "23WJ1A04M8", name: "UDUTHA SRIKANTH", parentPhone: "9441913582", parentName: "", studentPhone: "9346841200" },
  { rollNumber: "23WJ1A04M9", name: "UPPAGANDLA POOJITHA", parentPhone: "9849546374", parentName: "", studentPhone: "7569731215" },
  { rollNumber: "23WJ1A04N0", name: "V VIGNESH", parentPhone: "8309367707", parentName: "", studentPhone: "9391282352" },
  { rollNumber: "23WJ1A04N1", name: "VADLAKONDA SOUMITH", parentPhone: "9000996893", parentName: "", studentPhone: "7842601095" },
  { rollNumber: "23WJ1A04N3", name: "VEMULA PRANAY TEJ", parentPhone: "7569818571", parentName: "", studentPhone: "9391631775" },
  { rollNumber: "23WJ1A04N4", name: "VEMULA SAI VARDHAN", parentPhone: "9908481229", parentName: "", studentPhone: "9494308823" },
  { rollNumber: "23WJ1A04N5", name: "VINUKONDA HARSHA", parentPhone: "9989848061", parentName: "", studentPhone: "8328284689" },
  { rollNumber: "23WJ1A04N6", name: "VODDEPALLY HANI PRASAD", parentPhone: "9908992254", parentName: "", studentPhone: "6301196437" },
  { rollNumber: "23WJ1A04N7", name: "YARAKALA ROHAN", parentPhone: "9866870036", parentName: "", studentPhone: "9912870036" },
  { rollNumber: "22WJ1A0446", name: "BUSHIPAKA HARITHA", parentPhone: "", parentName: "", studentPhone: "" },
  { rollNumber: "24WJ5A0425", name: "SINGARAPU SAI CHARAN", parentPhone: "9849645425", parentName: "", studentPhone: "7702869215" },
  { rollNumber: "24WJ5A0426", name: "SWAYAMPAKULA SUSHMITHA", parentPhone: "9912382578", parentName: "", studentPhone: "7842807545" },
  { rollNumber: "24WJ5A0427", name: "TADIKAMALLA REVATHI", parentPhone: "9381561030", parentName: "", studentPhone: "7989880173" },
  { rollNumber: "24WJ5A0428", name: "THUDUM KAVYA", parentPhone: "9618067281", parentName: "", studentPhone: "9618017281" },
  { rollNumber: "24WJ5A0429", name: "UTLA BHAVANI", parentPhone: "9553603500", parentName: "", studentPhone: "8074514899" },
  { rollNumber: "24WJ5A0430", name: "VANNEL DEVI HARIKA", parentPhone: "9640964324", parentName: "", studentPhone: "9491749925" },
  { rollNumber: "24WJ5A0431", name: "VARANGANTI AKSHAYA", parentPhone: "8187843716", parentName: "", studentPhone: "9550778369" },
  { rollNumber: "24WJ5A0432", name: "VEDANTHAM SAHITHI", parentPhone: "9346391725", parentName: "", studentPhone: "8374658937" },
  { rollNumber: "24WJ5A0433", name: "VELPULA LAHARIKA", parentPhone: "9440678123", parentName: "", studentPhone: "7075536669" },
   ];
   
   let messageLogs = [];
   
   // Firebase configuration
   const firebaseConfig = {
     apiKey: "AIzaSyBRp7Gv6rw32zakHZZFQ-zxm-ndKL49sh8",
     authDomain: "studentconnect-6f32b.firebaseapp.com",
     databaseURL: "https://studentconnect-6f32b-default-rtdb.firebaseio.com",
     projectId: "studentconnect-6f32b",
     storageBucket: "studentconnect-6f32b.appspot.com",
     messagingSenderId: "520897019550",
     appId: "1:520897019550:web:fb7365a6ca17d30913858f"
   };
   
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
   // Get a reference to the database service
   const database = firebase.database();
   
   // Replace localStorageDatabase with firebaseDatabase
   const firebaseDatabase = {
     saveMessage: function (log) {
       return database.ref('messageLogs').push(log);
     },
     getAllMessages: function () {
       return database.ref('messageLogs').once('value')
         .then(snapshot => {
           const messages = [];
           snapshot.forEach(childSnapshot => {
             messages.push(childSnapshot.val());
           });
           return messages;
         });
     },
     cleanupOldMessages: function () {
       const oneMonthAgo = new Date();
       oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
       
       return database.ref('messageLogs').once('value')
         .then(snapshot => {
           const updates = {};
           snapshot.forEach(childSnapshot => {
             const message = childSnapshot.val();
             if (new Date(message.timestamp) <= oneMonthAgo) {
               updates[childSnapshot.key] = null;
             }
           });
           return database.ref('messageLogs').update(updates);
         });
     },
     clearAllLogs: function () {
       return database.ref('messageLogs').remove();
     }
   };
   
   document.addEventListener('DOMContentLoaded', function () {
     fetchMessagesFromServer();
     periodicCleanup();
     setupEventListeners();
   });
   
   function fetchMessagesFromServer() {
     firebaseDatabase.getAllMessages()
       .then(messages => {
         messageLogs = messages;
         updateMessageLogs();
       })
       .catch(error => console.error('Error fetching messages:', error));
   }
   
   function periodicCleanup() {
     firebaseDatabase.cleanupOldMessages()
       .then(() => console.log('Old messages cleaned up'))
       .catch(error => console.error('Error cleaning up messages:', error));
   }
   
   function setupEventListeners() {
     const searchBtn = document.getElementById('searchBtn');
     if (searchBtn) searchBtn.addEventListener('click', toggleSearch);
   
     const whatsappParentBtn = document.getElementById('whatsappParentBtn');
     if (whatsappParentBtn) {
       whatsappParentBtn.addEventListener('click', toggleWhatsAppParent);
     }
   
     const sendCustomMessageBtn = document.getElementById('sendCustomMessageBtn');
     if (sendCustomMessageBtn) {
       sendCustomMessageBtn.addEventListener('click', sendCustomWhatsAppMessage);
     }
   
     const printBtn = document.getElementById('printBtn');
     if (printBtn) printBtn.addEventListener('click', openPrintModal);
   
     const closeModalBtn = document.getElementById('closeModal');
     if (closeModalBtn) closeModalBtn.addEventListener('click', closePrintModal);
   
     const printPreviewBtn = document.getElementById('printPreviewBtn');
     if (printPreviewBtn) printPreviewBtn.addEventListener('click', showPrintPreview);
   
     const clearLogsBtn = document.getElementById('clearLogsBtn');
     if (clearLogsBtn) clearLogsBtn.addEventListener('click', clearAllLogs);
   
     // Initialize date inputs with current date range
     const today = new Date();
     const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
   
     const startDateInput = document.getElementById('startDate');
     const endDateInput = document.getElementById('endDate');
     if (startDateInput) startDateInput.value = oneMonthAgo.toISOString().split('T')[0];
     if (endDateInput) endDateInput.value = today.toISOString().split('T')[0];
   
     const exportLogsBtn = document.getElementById('exportLogsBtn');
     if (exportLogsBtn) exportLogsBtn.addEventListener('click', exportMessageLogs);
   
     const studentsBtn = document.getElementById('studentsBtn');
     if (studentsBtn) studentsBtn.addEventListener('click', openStudentsPage);
   
     // Add event listener for the new print button
     const newPrintBtn = document.getElementById('newPrintBtn');
     if (newPrintBtn) newPrintBtn.addEventListener('click', openPrintModal);
   
     const allParentsBtn = document.getElementById('allParentsBtn');
     if (allParentsBtn) allParentsBtn.addEventListener('click', toggleBulkMessageForm);
   
     const bulkMessageContent = document.getElementById('bulkMessageContent');
     if (bulkMessageContent) {
       bulkMessageContent.addEventListener('input', saveBulkMessage);
       loadBulkMessage(); // Load the saved message when the page loads
     }
  
     const dialNumberBtn = document.getElementById('dialNumberBtn');
     if (dialNumberBtn) dialNumberBtn.addEventListener('click', openDialPad);
   }
   
   function toggleSearch() {
     const profileCard = document.getElementById('profileCard');
     if (profileCard.style.display === 'none') {
       searchStudent();
     } else {
       profileCard.style.display = 'none';
     }
   }
   
   function toggleWhatsAppParent() {
     const customMessageArea = document.getElementById('customMessageArea');
     if (customMessageArea.style.display === 'none' || customMessageArea.style.display === '') {
       customMessageArea.style.display = 'block';
     } else {
       customMessageArea.style.display = 'none';
     }
   }
   
   function searchStudent() {
     const rollNumber = document.getElementById('rollNumber').value.toUpperCase();
     const student = students.find(s => s.rollNumber.toUpperCase().endsWith(rollNumber));
     const profileCard = document.getElementById('profileCard');
   
     // Hide the profile card first
     profileCard.style.display = 'none';
   
     if (student) {
       document.getElementById('studentName').textContent = student.name;
       document.getElementById('studentRoll').textContent = student.rollNumber;
       document.getElementById('parentName').textContent = student.parentName || 'Not available';
       document.getElementById('parentPhone').textContent = student.parentPhone;
       document.getElementById('studentPhone').textContent = student.studentPhone || 'Not available';
   
       profileCard.style.display = 'block';
       profileCard.classList.add('fade-in');
     } else {
       alert('Student not found. Please check the roll number and try again.');
     }
   }
   
   function toggleBulkMessageForm() {
     const bulkMessageForm = document.getElementById('bulkMessageForm');
     if (bulkMessageForm.style.display === 'none' || bulkMessageForm.style.display === '') {
       bulkMessageForm.style.display = 'block';
       bulkMessageForm.classList.add('fade-in');
       document.getElementById('bulkMessageContent').value = ''; // Clear previous message
     } else {
       bulkMessageForm.style.display = 'none';
     }
   }
   
   function toggleCRProfiles() {
     const crProfiles = document.getElementById('crProfiles');
     if (crProfiles.style.display === 'none') {
       showCRProfiles();
       crProfiles.style.display = 'block';
       crProfiles.classList.add('fade-in');
     } else {
       crProfiles.style.display = 'none';
     }
   }
   
   function showCRProfiles() {
     const crProfiles = document.getElementById('crProfiles');
     crProfiles.innerHTML = ''; // Clear existing profiles
   
     const crs = [
      { name: '', rollNumber: '', email: '', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
       { name: '', rollNumber: '', email: '', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
     ];
   
     crs.forEach(cr => {
       const profileCard = document.createElement('div');
       profileCard.className = 'profile-card cr-card';
       profileCard.innerHTML = `
         <div class="cr-info">
           <h3>${cr.name}</h3>
           <p><strong>Roll Number:</strong> ${cr.rollNumber}</p>
           <p><strong>Email:</strong> ${cr.email}</p>
           <button onclick="callCR('${cr.rollNumber}')">Call</button>
           <button onclick="whatsappCR('${cr.rollNumber}')">WhatsApp</button>
         </div>
       `;
       crProfiles.appendChild(profileCard);
     });
   }
   
   function openPrintModal() {
     document.getElementById('printModal').style.display = 'block';
   }
   
   function closePrintModal() {
     document.getElementById('printModal').style.display = 'none';
   }
   
   function filterData() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    endDate.setHours(23, 59, 59, 999); // Set to end of day

    return firebase.database().ref('messageLogs').once('value')
      .then(snapshot => {
        const messages = [];
        snapshot.forEach(childSnapshot => {
          const message = childSnapshot.val();
          const messageDate = new Date(message.timestamp);
          
          // Ensure recipient is always 10 digits
          if (message.recipient && message.recipient.startsWith('+91')) {
            message.recipient = message.recipient.slice(3);
          }
          
          if (messageDate >= startDate && messageDate <= endDate) {
            messages.push(message);
          }
        });
        return messages;
      });
  }
   
   function generatePrintableTable(data) {
    let tableHtml = `
      <div style="text-align: center; margin-bottom: 20px;">
        <p>Message Logs Report</p>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Date</th>
            <th>Sender</th>
            <th>Recipient</th>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Parent Name</th>
            <th style="width: 25%;">Message</th>
            <th>Status</th>
            <th>Platform</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
    `;
  
    let currentDate = '';
    data.forEach(log => {
      const date = new Date(log.timestamp);
      const dateString = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      const highlightClass = dateString !== currentDate ? 'highlight' : '';
      currentDate = dateString;
  
      const formattedPhone = log.recipient ? log.recipient.slice(-10) : 'N/A';
      tableHtml += `
        <tr class="${highlightClass}">
          <td>${dateString}</td>
          <td>${log.sender || 'N/A'}</td>
          <td>${formattedPhone}</td>
          <td>${log.studentName || 'N/A'}</td>
          <td>${log.studentRoll || 'N/A'}</td>
          <td>${log.parentName || 'N/A'}</td>
          <td style="width: 25%;">${log.message || 'N/A'}</td>
          <td>${log.status || 'N/A'}</td>
          <td>${log.platform || 'N/A'}</td>
          <td>${log.duration || 'N/A'}</td>
        </tr>
      `;
    });
  
    tableHtml += `
        </tbody>
      </table>
      <div style="text-align: center; margin-top: 20px;">
        <!-- <p>© 2024 Croxton Technologies. All rights reserved.</p> -->
      </div>
    `;
  
    return tableHtml;
  }
   
   function showPrintPreview() {
     filterData().then(filteredData => {
       const printContent = generatePrintableTable(filteredData);
       const startDate = new Date(document.getElementById('startDate').value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
       const endDate = new Date(document.getElementById('endDate').value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  
       // Open a new window for the print preview
       const printWindow = window.open('', '_blank');
       printWindow.document.write(`
         <html>
           <head>
             <title>Message Logs ${startDate} to ${endDate}</title>
             <style>
               body {
                 font-family: Arial, sans-serif;
                 margin: 0;
                 padding: 20px;
               }
               .header, .footer {
                 text-align: center;
                 margin-bottom: 20px;
               }
               table {
                 width: 100%;
                 border-collapse: collapse;
                 margin-bottom: 20px;
               }
               th, td {
                 border: 1px solid #ddd;
                 padding: 8px;
                 text-align: left;
                 font-size: 12px;
               }
               th {
                 background-color: #f2f2f2;
                 font-weight: bold;
               }
               .highlight {
                 background-color: #ffffd0;
               }
               td:nth-child(7) {
                 width: 25%;
                 word-break: break-word;
               }
               @media print {
                 @page {
                   size: A4 landscape;
                   margin: 10mm;
                 }
                 body {
                   padding: 0;
                 }
                 .no-print {
                   display: none;
                 }
               }
             </style>
           </head>
           <body>
             <div class="header">
             
               <p>Date Range: ${startDate} to ${endDate}</p>
             </div>
             ${printContent}
             <div class="footer">
               <p>© 2024 Croxton Technologies Hyderabad India. All rights reserved.</p>
             </div>
             <div class="no-print" style="text-align: center; margin-top: 20px;">
               <button onclick="window.print()" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; margin: 5px; cursor: pointer;">Print</button>
               <button onclick="downloadCSV()" style="background-color: #008CBA; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; margin: 5px; cursor: pointer;">Download CSV</button>
             </div>
             <script>
               function downloadCSV() {
                 const rows = document.querySelectorAll('table tr');
                 let csv = [];
                 for (let i = 0; i < rows.length; i++) {
                   let row = [], cols = rows[i].querySelectorAll('td, th');
                   for (let j = 0; j < cols.length; j++) {
                     let data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ');
                     data = data.replace(/"/g, '""');
                     row.push('"' + data + '"');
                   }
                   csv.push(row.join(','));
                 }
                 let csvContent = csv.join('\\n');
                 let blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                 let link = document.createElement('a');
                 if (link.download !== undefined) {
                   let url = URL.createObjectURL(blob);
                   link.setAttribute('href', url);
                   link.setAttribute('download', 'Message_Logs_${startDate}_to_${endDate}.csv');
                   link.style.visibility = 'hidden';
                   document.body.appendChild(link);
                   link.click();
                   document.body.removeChild(link);
                 }
               }
               window.onload = function() {
                 // Automatically open print dialog when the page loads
                 window.print();
               }
             </script>
           </body>
         </html>
       `);
       printWindow.document.close();
  
       // Hide the modal
       document.getElementById('printModal').style.display = 'none';
     });
   }
   
   function updateMessageLogs() {
     const logsContainer = document.getElementById('messageLogs');
     logsContainer.innerHTML = '';
   
     // Only show the most recent message
     if (messageLogs.length > 0) {
       const mostRecentLog = messageLogs[messageLogs.length - 1];
       const logEntry = document.createElement('p');
       const timestamp = new Date(mostRecentLog.timestamp);
       const formattedDate = `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
       logEntry.textContent = `${formattedDate} - To: ${mostRecentLog.recipient} - Student: ${mostRecentLog.studentName || 'N/A'} (${mostRecentLog.studentRoll || 'N/A'}) - Parent: ${mostRecentLog.parentName || 'N/A'} - Status: ${mostRecentLog.status} - Platform: ${mostRecentLog.platform || 'SMS'} - Duration: ${mostRecentLog.duration || 'N/A'}`;
       logEntry.classList.add('fade-in');
       logsContainer.appendChild(logEntry);
     }
   
     // Add a message indicating there are more logs if applicable
     if (messageLogs.length > 1) {
       const moreLogsMessage = document.createElement('p');
       moreLogsMessage.textContent = `... and ${messageLogs.length - 1} more messages`;
       moreLogsMessage.style.fontStyle = 'italic';
       moreLogsMessage.style.color = '#666';
       logsContainer.appendChild(moreLogsMessage);
     }
   }
   
   function clearAllLogs() {
     if (confirm("Are you sure you want to clear all message logs? This action cannot be undone.")) {
       firebaseDatabase.clearAllLogs()
         .then(() => {
           messageLogs = [];
           updateMessageLogs();
           alert("All message logs have been cleared.");
         })
         .catch(error => {
           console.error('Error clearing logs:', error);
           alert("An error occurred while clearing logs. Please try again.");
         });
     }
   }
   
   function callParent() {
     const parentPhone = document.getElementById('parentPhone').textContent;
     const studentName = document.getElementById('studentName').textContent;
     const studentRoll = document.getElementById('studentRoll').textContent;
     const parentName = document.getElementById('parentName').textContent;
     
     if (parentPhone) {
       const startTime = new Date();
       window.location.href = `tel:${parentPhone}`;
       
       // Create and show popup after 10 seconds
       setTimeout(() => {
         const popup = document.createElement('div');
         popup.style.position = 'fixed';
         popup.style.left = '50%';
         popup.style.top = '50%';
         popup.style.transform = 'translate(-50%, -50%)';
         popup.style.backgroundColor = '#ffffff';
         popup.style.padding = '30px';
         popup.style.borderRadius = '10px';
         popup.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
         popup.style.zIndex = '1000';
         popup.style.fontFamily = 'Arial, sans-serif';
         popup.style.textAlign = 'center';
         popup.innerHTML = `
           <h3 style="margin-top: 0; color: #333;">Call Status</h3>
           <p style="margin-bottom: 20px; color: #666;">Was the call answered?</p>
           <button id="yesBtn" style="background-color: #4CAF50; color: white; border: none; padding: 10px 20px; margin: 0 10px; cursor: pointer; border-radius: 5px;">Yes</button>
           <button id="noBtn" style="background-color: #f44336; color: white; border: none; padding: 10px 20px; margin: 0 10px; cursor: pointer; border-radius: 5px;">No</button>
         `; 
         document.body.appendChild(popup);
   
         document.getElementById('yesBtn').addEventListener('click', () => handleCallResponse(true));
         document.getElementById('noBtn').addEventListener('click', () => handleCallResponse(false));
   
         function handleCallResponse(wasAnswered) {
           const endTime = new Date();
           const durationInSeconds = Math.round((endTime - startTime) / 1000);
           let durationString;
           
           if (durationInSeconds >= 60) {
             const minutes = Math.floor(durationInSeconds / 60);
             const seconds = durationInSeconds % 60;
             durationString = `${minutes} min${minutes > 1 ? 's' : ''} ${seconds} sec${seconds !== 1 ? 's' : ''}`;
           } else {
             durationString = `${durationInSeconds} sec${durationInSeconds !== 1 ? 's' : ''}`;
           }
           
           // Log the call
           const log = {
             sender: 'NVS Murthy',
             recipient: parentPhone,
             studentName: studentName,
             studentRoll: studentRoll,
             parentName: parentName,
             message: `Phone call to parent - ${wasAnswered ? 'Answered' : 'Not Answered'}`,
             timestamp: new Date().toISOString(),
             status: wasAnswered ? 'answered' : 'not answered',
             platform: 'Phone',
             duration: wasAnswered ? durationString : 'N/A'
           };
           firebaseDatabase.saveMessage(log)
             .then(() => fetchMessagesFromServer())
             .catch(error => console.error('Error saving message:', error));
           document.body.removeChild(popup);
         }
       }, 10000);
     } else {
       alert('Parent phone number not available.');
     }
   }
   
   function callStudent() {
     const studentPhone = document.getElementById('studentPhone').textContent;
     
     if (studentPhone && studentPhone !== 'Not available') {
       window.location.href = `tel:${studentPhone}`;
     } else {
       alert('Student phone number not available.');
     }
   }
   
   function whatsappParent() {
     const customMessageArea = document.getElementById('customMessageArea');
     customMessageArea.style.display = 'block';
     const sendCustomMessageBtn = document.getElementById('sendCustomMessageBtn');
     sendCustomMessageBtn.onclick = sendCustomWhatsAppMessage;
   }
   
   function whatsappStudent() {
     const studentPhone = document.getElementById('studentPhone').textContent;
     const studentName = document.getElementById('studentName').textContent;
     const studentRoll = document.getElementById('studentRoll').textContent;
     const parentName = document.getElementById('parentName').textContent;
     
     if (studentPhone && studentPhone !== 'Not available') {
       const formattedPhone = `+91${studentPhone.replace(/\D/g, '')}`;
       const message = encodeURIComponent('Hello, this is a message from your faculty.');
       window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
       
       // Log the WhatsApp message
       const log = {
         sender: 'NVS Murthy',
         recipient: formattedPhone,
         studentName: studentName,
         studentRoll: studentRoll,
         parentName: parentName,
         message: 'WhatsApp message sent to student',
         timestamp: new Date().toISOString(),
         status: 'sent',
         platform: 'WhatsApp'
       };
       firebaseDatabase.saveMessage(log)
         .then(() => fetchMessagesFromServer())
         .catch(error => console.error('Error saving message:', error));
     } else {
       alert('Student phone number not available.');
     }
   }
   
   function sendCustomWhatsAppMessage() {
     const parentPhone = document.getElementById('parentPhone').textContent;
     const studentName = document.getElementById('studentName').textContent;
     const studentRoll = document.getElementById('studentRoll').textContent;
     const parentName = document.getElementById('parentName').textContent;
     const customMessage = document.getElementById('customMessageContent').value;
     
     if (parentPhone && customMessage.trim() !== '') {
       // Format the phone number with country code
       const formattedPhone = `+91${parentPhone.replace(/\D/g, '')}`;
       const message = encodeURIComponent(customMessage);
       window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
       
       // Log the custom WhatsApp message
       const log = {
         sender: 'NVS Murthy',
         recipient: formattedPhone,
         studentName: studentName,
         studentRoll: studentRoll,
         parentName: parentName,
         message: customMessage,
         timestamp: new Date().toISOString(),
         status: 'sent',
         platform: 'WhatsApp'
       };
       firebaseDatabase.saveMessage(log)
         .then(() => fetchMessagesFromServer())
         .catch(error => console.error('Error saving message:', error));
       
       // Clear and hide the custom message area
       document.getElementById('customMessageContent').value = '';
       document.getElementById('customMessageArea').style.display = 'none';
     } else {
       alert('Please enter a message and ensure parent phone number is available.');
     }
   }
   
   function exportMessageLogs() {
     firebaseDatabase.getAllMessages()
       .then(messages => {
         const today = new Date();
         const dateString = today.toISOString().split('T')[0];
         const csvContent = "data:text/csv;charset=utf-8,"
           + "Timestamp,Sender,Recipient,Student Name,Roll Number,Parent Name,Message,Status,Platform,Duration\n"
           + messages.map(e => {
             return `${e.timestamp},${e.sender},${e.recipient},${e.studentName || ''},${e.studentRoll || ''},${e.parentName || ''},${e.message},${e.status},${e.platform || 'SMS'},${e.duration || 'N/A'}`;
           }).join("\n");
   
         const encodedUri = encodeURI(csvContent);
         const link = document.createElement("a");
         link.setAttribute("href", encodedUri);
         link.setAttribute("download", `message_logs_${dateString}.csv`);
         document.body.appendChild(link);
         link.click();
       })
       .catch(error => console.error('Error exporting logs:', error));
   }
   
   function callCR(rollNumber) {
     const cr = students.find(s => s.rollNumber === rollNumber);
     if (cr && cr.studentPhone) {
       window.location.href = `tel:${cr.studentPhone}`;
     } else {
       alert('Phone number not available for this CR.');
     }
   }
   
   function whatsappCR(rollNumber) {
     const cr = students.find(s => s.rollNumber === rollNumber);
     if (cr && cr.studentPhone) {
       const message = encodeURIComponent('Hello CR, this is a message from your faculty.');
       window.open(`https://wa.me/${cr.studentPhone}?text=${message}`, '_blank');
     } else {
       alert('WhatsApp number not available for this CR.');
     }
   }
   
   function openStudentsPage() {
     window.open('students.html', '_blank');
   }
   
   function sendBulkWhatsAppMessage(parentPhones, message) {
     const encodedMessage = encodeURIComponent(message);
     const whatsappUrl = `https://wa.me/?text=${encodedMessage}&phone=${parentPhones.join(',')}`;
     window.open(whatsappUrl, '_blank');
   }
   
   function sendBulkSMSMessage(parentPhones, message) {
     const smsUrl = `sms:?body=${encodeURIComponent(message)}&phone=${parentPhones.join(',')}`;
     window.location.href = smsUrl;
   }
   
   function sendBulkMessage(group) {
     const messageTextArea = document.getElementById('bulkMessageContent');
     const message = messageTextArea.value;
     if (message.trim() === '') {
       alert('Please enter a message.');
       return;
     }
   
     let parentPhones = students.map(student => student.parentPhone);
     let startIndex, endIndex;
   
     switch (group) {
       case 'first':
         startIndex = 0;
         endIndex = 25;
         break;
       case 'second':
         startIndex = 25;
         endIndex = 50;
         break;
       case 'third':
         startIndex = 50;
         endIndex = parentPhones.length;
         break;
     }
   
     parentPhones = parentPhones.slice(startIndex, endIndex);
     const phoneNumbers = parentPhones.join(',');
   
     // Open SMS app with pre-filled message for bulk sending
     window.location.href = `sms:${phoneNumbers}?body=${encodeURIComponent(message)}`;
   
     // Log the bulk message to Firebase
     const bulkLog = {
       sender: 'NVS Murthy',
       recipients: parentPhones,
       message: message,
       timestamp: new Date().toISOString(),
       status: 'sent',
       platform: 'SMS (Bulk)',
       group: group
     };
   
     // Save bulk message log
     firebaseDatabase.saveMessage(bulkLog)
       .then(() => console.log('Bulk message logged successfully'))
       .catch(error => console.error('Error saving bulk message:', error));
   
     // Log individual messages
     parentPhones.forEach(phone => {
       const student = students.find(s => s.parentPhone === phone);
       const log = {
         sender: 'NVS Murthy',
         recipient: phone,
         studentName: student ? student.name : 'N/A',
         studentRoll: student ? student.rollNumber : 'N/A',
         parentName: student ? student.parentName : 'N/A',
         message: message,
         timestamp: new Date().toISOString(),
         status: 'sent',
         platform: 'SMS',
         bulkGroup: group
       };
       firebaseDatabase.saveMessage(log)
         .then(() => console.log('Individual message logged successfully'))
         .catch(error => console.error('Error saving individual message:', error));
     });
   
     // Fetch updated messages
     fetchMessagesFromServer();
   
     alert(`Bulk message sent to ${group} group (${parentPhones.length} recipients)`);
   }
   
   // Add this function to save the message to local storage
   function saveBulkMessage() {
     const message = document.getElementById('bulkMessageContent').value;
     localStorage.setItem('bulkMessage', message);
   }
  
   // Add this function to load the message from local storage
   function loadBulkMessage() {
     const message = localStorage.getItem('bulkMessage') || '';
     document.getElementById('bulkMessageContent').value = message;
   }
  
   function openDialPad(event) {
     // Get the parent profile card of the clicked button
     const profileCard = event.target.closest('.profile-card');
    
     // Extract information from this specific card
     const studentPhone = profileCard.querySelector('#studentPhone').textContent;
     const studentName = profileCard.querySelector('#studentName').textContent;
     const studentRoll = profileCard.querySelector('#studentRoll').textContent;
     const parentName = profileCard.querySelector('#parentName').textContent;
  
     localStorage.setItem('dialpadInfo', JSON.stringify({
       phone: studentPhone,
       studentName: studentName,
       studentRoll: studentRoll,
       parentName: parentName
     }));
  
     window.location.href = 'dialpad.html';
   }
  
   // Add this function to add sample data (for testing purposes)
   // document.addEventListener('DOMContentLoaded', addSampleData);
