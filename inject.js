const waitForPlayer = (callback) => {
  const checkPlayer = setInterval(() => {
      const videoPlayer = document.querySelector("video");
      if (videoPlayer) {
          clearInterval(checkPlayer);
          callback(videoPlayer);
      }
  }, 500);
};

const setLowestQuality = () => {
  waitForPlayer((videoPlayer) => {
      const settingsButton = document.querySelector(
          '[data-a-target="player-settings-button"]'
      );
      if (settingsButton) {
          settingsButton.click();

          setTimeout(() => {
              const qualityButton = document.querySelector(
                  '[data-a-target="player-settings-menu-item-quality"]'
              );
              if (qualityButton) {
                  qualityButton.click();

                  setTimeout(() => {
                      const qualityOptions = document.querySelectorAll(
                          '[data-a-target="player-settings-submenu-quality-option"]'
                      );
                      if (qualityOptions.length > 0) {
                          qualityOptions[qualityOptions.length - 1]
                              .querySelector("input")
                              .click();
                          console.log("Quality set to lowest.");
                      } else {
                          console.log("No quality options found.");
                      }
                  }, 500);
              } else {
                  console.log("Quality button not found.");
              }
          }, 500);
      } else {
          console.log("Settings button not found.");
      }
  });
};

setLowestQuality();
