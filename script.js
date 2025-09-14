// Random usernames
function getRandomName() {
  const names = ["Traveler", "Explorer", "Stranger", "Visitor", "Dreamer"];
  return names[Math.floor(Math.random() * names.length)];
}

// Get user's country by IP
async function getCountry() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    return data.country_name || "Unknown";
  } catch (e) {
    return "Unknown";
  }
}

window.onload = async () => {
  const username = getRandomName();
  const country = await getCountry();

  // Update UI
  document.getElementById("user-info").innerText =
    `You are ${username} from ${country}`;

  // Jitsi Embed
  const domain = "8x8.vc";
  const options = {
    roomName: "uHomegleRoom-" + Math.random().toString(36).substring(7),
    parentNode: document.querySelector("#jaas-container"),
    userInfo: {
      displayName: `${username} (${country})`
    }
  };
  new JitsiMeetExternalAPI(domain, options);
};
