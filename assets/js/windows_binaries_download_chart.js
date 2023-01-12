fetch("https://api.github.com/repos/minetest/minetest/releases").then(r => r.json()).then((data) => {
  data = data.slice(0, 7);
  const ctx = document.getElementById("windowsDownloadChart");
  let labels = data.filter(entry => !entry.tag_name.endsWith("android")).map((entry) => entry.tag_name);
  const get_data = (suffix) => data.map((entry) => entry.assets.filter((asset) => asset.name.endsWith(suffix))).filter((entry) => entry.length > 0).map((entry) => entry[0].download_count);
  let data32 = get_data("-win32.zip");
  let data64 = get_data("-win64.zip");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "32 bit",
          data: data32,
        },
        {
          label: "64 bit",
          data: data64,
        }
      ]}
    }
  );
});
