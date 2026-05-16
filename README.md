Analog And Digital Clock

   A dual clock app built using HTML, CSS, and JavaScript. It shows the current time in both analog and digital formats, updates every 500 milliseconds, and displays the current day and AM/PM session. No libraries or frameworks needed — just open in a browser.

Features

  * Analog clock with hour, minute, and second hands
    
  * Digital clock with hours, minutes, seconds, and AM/PM
    
  * Displays current day (SUN, MON, etc.) and session (AM/PM) on the analog clock
    
  * Flickering neon header animation
    
  * Dark theme with aqua color styling
    
  * Updates every 500ms for smooth real-time display

Setup and Usage

  1. Clone the repository

     git clone https://github.com/Santhoshkumar2208/Analog-And-Digital-Clock.git
     cd Analog-And-Digital-Clock

  2. Open clock.html in any browser — no setup or build step required.

How It Works

   The clock() function runs every 500 milliseconds using setInterval. It gets the current hours, minutes, and seconds using JavaScript's Date object. The analog hands are rotated using CSS transform: rotate() — the hour hand moves 30° per hour plus 0.5° per minute, the minute hand moves 6° per minute, and the second hand moves 6° per second. The day name is fetched using toLocaleDateString and the AM/PM session is determined by checking if the hour is 12 or above.
