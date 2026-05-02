# Product Requirements Document
Project: 1930s Noir Detective Web Experience

## 1. Introduction / Overview
This product is a highly interactive, visually distinct web experience styled after 1930s rubber-hose animation and classic noir detective tropes. The user journey is split into two phases. First, visitors land on a whimsical but mysterious page featuring a logic puzzle (the "Frantic Switchboard"). Solving this grants them "insider credentials" to a secret Detective Agency dashboard. Inside, the user is challenged to solve a complex, single-scenario murder mystery by analyzing witness transcripts under the pressure of a countdown timer. Success logs their completion time on a global leaderboard.

## 2. Goals / Objectives
*   **Engagement:** Create a highly immersive, fun, and thematic web experience that captivates users from the first interaction.
*   **Visual Identity:** Successfully execute a 1930s rubber-hose animation aesthetic mixed with a detective narrative.
*   **Competition:** Drive urgency and social sharing through a countdown timer and a global ranking system.
*   **Technical Viability:** Build a performant, lightweight application utilizing Next.js, Framer Motion/GSAP, and Supabase that can be efficiently generated and maintained using AI coding assistants.

## 3. Target Audience / User Personas
*   **The Puzzle Enthusiast:** Enjoys riddles, logic games, and escape rooms. They will appreciate the switchboard entry puzzle and the transcript contradictions.
*   **The Casual Gamer:** Looking for a quick, entertaining web experience that is visually unique.
*   **The Competitor:** Motivated by the countdown timer and the desire to see their name at the top of the global leaderboard.

## 4. User Stories / Use Cases
*   As a visitor, I want to be greeted by a 1930s animated interface so that I am immediately immersed in the theme.
*   As a visitor, I want to interact with a logic puzzle (e.g., the switchboard) so that I can earn my way into the main experience.
*   As a recruit, I want to enter my name after solving the entry puzzle so that my identity is recorded for the agency.
*   As a detective, I want to access a dashboard with witness transcripts and a ticking countdown timer so that I feel the urgency of solving the case.
*   As a detective, I want to select the contradictory statement or identify the suspect so that I can crack the case.
*   As a successful detective, I want to see a victory screen displaying my remaining time and my rank on a global leaderboard so that I can compare my performance with others.
*   As a failed detective, I want to be notified that time ran out and be given the option to restart the mystery so that I can try again.

## 5. Functional Requirements
**Landing Page (The Frantic Switchboard):**
*   The system must display an interactive drag-and-drop puzzle.
*   The system must validate the user's cable placements against the correct logical solution.
*   Upon correct solution, the system must reveal a text input field to capture the user's name/alias.
* there should be threee wires red yellow green they should connect with some random outlets and we have to connect them in correct order to solve the puzzle. there could be some hints like red goes right of green and yellow goes left of red

**The Detective Dashboard:**
*   The system must initiate a countdown timer (e.g., 3:00 minutes) as soon as the dashboard loads.
*   The system must display a set of static witness transcripts.
*   The user must be able to select/click on specific statements or suspect names to make their final accusation.
*   The system must evaluate the accusation:
    *   **If correct:** Stop the timer, calculate the remaining time (score), and trigger the victory state.
    *   **If incorrect:** Trigger a penalty (e.g., deduct 30 seconds) or an immediate "Game Over" state.

**Leaderboard (Supabase Integration):**
*   The system must write the user's name and their winning score (time remaining) to the Supabase database.
*   The system must fetch and display the top 10-20 scores from the database on a global leaderboard screen.

## 6. Non-Functional Requirements
*   **Performance:** Animations (powered by Framer Motion or GSAP) must run smoothly at 60fps without lagging the browser.
*   **Responsiveness:** The layout and interactive elements (especially the drag-and-drop switchboard) must function correctly on both desktop (mouse) and mobile (touch) devices.
*   **Security:** Basic rate-limiting and validation should be implemented on the Supabase database to prevent users from spamming fake high scores via the API.
*   **Tech Stack:** Frontend built with Next.js, React, and Tailwind CSS. Backend and database managed via Supabase.

## 7. Design Considerations / Visuals
*   **Aesthetic:** 1930s rubber-hose animation style. High contrast (potentially sepia/monochrome with vibrant accent colors for interactive elements).
*   **Typography:** Era-appropriate fonts—bouncy, hand-drawn fonts for headings, and faded typewriter fonts for the witness transcripts.
*   **Audio (Optional but recommended):** Vintage jazz or a ticking clock sound effect to heighten the tension of the countdown timer.

## 8. Success Metrics
*   **Puzzle Conversion Rate:** The percentage of visitors who successfully complete the switchboard puzzle and enter their name.
*   **Mystery Completion Rate:** The percentage of "recruits" who successfully solve the mystery before the timer runs out.
*   **Replay/Share Factor:** Number of users who attempt the mystery multiple times (if allowed) or share their leaderboard rank.

## 9. Open Questions / Future Considerations
*   **Mobile Drag-and-Drop:** ensure it runs well also on touch devices like mobiles 
*   you should connect to stitch for the design and if you need you can use nano banana plugin for the project to get it right for getting the images you need you can introduce some royalty free image sources but they should be consistent with the 1930s noir detective aesthetic.
*   for the animations try to use the ones that are most suited for the 1930s rubber hose animation style and also try to use the ones that are most suited for the detective narrative.
*   keep the UI minimal and clean and try to use the dark mode for the website.
*   ensure the website is responsive on all devices and also try to make it mobile-friendly.
