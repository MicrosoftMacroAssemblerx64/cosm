add logo to 
public/Logo's/   (name it logo.png)

to update notification bar go to /components/config.ts

export const NOTIFICATION = {
  showNotification: true, - change to false if you dont want it to show.
  notificationText: "New Website!!! Purchase Now!",
  notificationLink: LINKS.DISCORD,  - for different link to show change to title of link example below
};

export const LINKS = {
  DISCORD: "https://discord.gg/cosmosmarket", -   notificationLink: LINKS.TELEGRAM, 
  TELEGRAM: "https://t.me/" -   notificationLink: LINKS.TELEGRAM,  
};

configure crisp in /components/Crisp.tsx
with id of account from crisp dashboard