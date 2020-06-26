# User Clock-In-Clock-Out Challenge

## Install

- Install NodeJS and MongoDB
- npm i
- npm run dev

## How did I approach this challenge?

- In approaching this, I took a look at the required specifications (allow a user to clock-in/clock-out, store the events), but I built upon it for an administrator to see the events and see how long a person worked for.
- So in the front-end, I designed the following views (ClockIn/Out page, User Sign Up page, Admin's Users page, Admin's User page, and the Event Logs page) to determine what endpoints were needed for each view.
- When a user clock's in, it creates a clocked in event. When a user clock's out, it creates 2 entries in the DB. The clock out event. But it also creates a WORK LOG event that specifies when a user clocked in and clocked out, and also the time worked between the 2 events.
- The WORK LOG event is used to help calculate the total amount worked, which in turn would assist in helping calculate pay for a given time period.
- The WORK LOG is also the mechanism I used for the functionality of being able to edit clock events. For example, a person forgets to clock out, or clock in, the time_worked field would fall between weird boundaries and would be flagged for review.

- NOTE: Everything is put in seconds worked because we aren't going to wait hours to test, so we wait seconds before clocking out after clocking in.

## What schema did I choose and why?

Answers in Back-End Repo.

## If given another day, or another month, how would I build on this?

- Please see the Future Considers section below.

## Future Considerations

- Add Testing. Maybe use Mock, Jest, some other testing frame work?
- Build on the User. Allow a user to login and logout. Allow them to see their own ** seconds ** worked.
- Instead of clocking in/out with a generic username, could use a more secure token or password?
- Styling. Do more with styling. Do a LOT more with the styling.
