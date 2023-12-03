function app() {
    const dashboardMenu = document.querySelector("#userDashboardMenu");
    const dashboardMenuBtn = document.querySelector("#dashboardMenuBtn");
    const dashboardMenuItems = dashboardMenu.querySelectorAll(
      '[role="menuitem"]'
    );
    const chevron = document.querySelector(".chevron");
    const chevronUp = document.querySelector(".chevron-up");
    const chevronDown = document.querySelector(".chevron-down");
    const setUpContainer = document.querySelector("#setupGuideContainer");
    const userNotification = document.querySelector("#userNotification");
    const guideContent = document.querySelectorAll("#guideContent");
    const progressCompleted = document.querySelector("#progress-completed");
    let progressStepsCompleted = 0;
    const HIDDEN_CLASS = "hidden";
    const MARK_AS_CHECKED_CLASS = "checked";
  
    const cancelTrailButton = document.querySelector(".cancel-button");
  
    function closeMenu() {
      dashboardMenuBtn.ariaExpanded = "false";
      dashboardMenuBtn.focus();
    }
    function handleDashboardMenuEscKeyPress(event) {
      if (event.key === "Escape") {
        toggleMenu();
      }
    }
  
    function handleDashboardMenuItemKeyPress(event, menuItemIndex) {
      isLastMenuItem = menuItemIndex === dashboardMenuItems.length - 1;
      isFirstMenuItem = menuItemIndex === 0;
  
      nextMenuItem = dashboardMenuItems.item(menuItemIndex + 1);
      previousMenuItem = dashboardMenuItems.item(menuItemIndex - 1);
  
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        if (isLastMenuItem) {
          dashboardMenuItems.item(0).focus();
          return;
        }
  
        nextMenuItem.focus();
      }
  
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        if (isFirstMenuItem) {
          dashboardMenuItems.item(dashboardMenuItems.length - 1).focus();
  
          return;
        }
  
        previousMenuItem.focus();
      }
    }
  
    function openMenu() {
      dashboardMenuBtn.ariaExpanded = "true";
  
      dashboardMenuItems.item(0).focus();
      dashboardMenu.addEventListener("keyup", handleDashboardMenuEscKeyPress);
  
      dashboardMenuItems.forEach((menuItem, menuItemIndex) => {
        menuItem.addEventListener("keyup", (event) => {
          handleDashboardMenuItemKeyPress(event, menuItemIndex);
        });
      });
    }
  
    function toggleMenu() {
      dashboardMenu.classList.toggle("hidden");
      const hideNotification = userNotification.classList.contains("hidden");
      if (!hideNotification) {
        userNotification.classList.add("hidden");
      }
      const isExpanded =
        dashboardMenuBtn.attributes["aria-expanded"].value === "true";
  
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    }
  
    function handleNotificationBoxKeyPress(event) {
      if (event.key === "Escape") {
        toggleNotificationBox();
      }
    }
    function openNotificationBox() {
      userNotification.ariaExpanded = "true";
      userNotification.querySelector(".notficationicon-checkall").focus();
      userNotification.addEventListener("keyup", handleNotificationBoxKeyPress);
    }
  
    function closeNotificationBox() {
      userNotification.ariaExpanded = "false";
  
      notificationIcon.focus();
    }
  
    function toggleNotificationBox() {
      userNotification.classList.toggle("hidden");
  
      const hideDashboardMenu = dashboardMenu.classList.contains("hidden");
      if (!hideDashboardMenu) {
        dashboardMenu.classList.add("hidden");
      }
      const isExpanded =
        userNotification.getAttribute("aria-expanded") === "true";
  
      if (isExpanded) {
        closeNotificationBox();
      } else {
        openNotificationBox();
      }
    }
  
    function cancelTrialCallOut() {
      const trailCallout = document.querySelector("#trial-callout");
      cancelTrailButton.addEventListener("click", function () {
        trailCallout.classList.add("hidden");
      });
  
      cancelTrailButton.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          trailCallout.classList.add("hidden");
        }
      });
    }
  
    function handleSetUpGuideMenuEscKeyPress(event) {
      if (event.key === "Escape") {
        toggleSetUpGuide();
      }
    }
    function closeSetUpGuide() {
      chevron.ariaExpanded = "false";
      chevron.focus();
    }
  
    function openSetUpGuide() {
      chevron.ariaExpanded = "true";
  
      guideContent.forEach((element) => {});
    }
  
    function addEventListenerToOpenGuideItems() {
      guideContent.forEach((element) => {
        const showContentButton = element.querySelector(".setup-process-button");
        showContentButton.addEventListener("click", function () {
          hideCurrentContent = document.querySelectorAll(".show-guide");
          const activeGuide = document.querySelector(".guide-content-active");
  
          activeGuide.classList.remove("guide-content-active");
          hideCurrentContent.forEach((element) => {
            element.classList.replace("show-guide", "hidden");
          });
          element
            .querySelector("#guideTextContent")
            .classList.replace("hidden", "show-guide");
          element
            .querySelector("#guideImageContent")
            .classList.replace("hidden", "show-guide");
          element.classList.add("guide-content-active");
        });
  
        const setupGuideCheckbox = element.querySelector(".setup-guide-checkbox");
        setupGuideCheckbox.addEventListener("click", () => {
          handleCheckedorNotChecked(element);
        });
      });
    }
  
    function toggleSetUpGuide() {
      chevronUp.classList.toggle("hidden");
      chevronDown.classList.toggle("hidden");
      setUpContainer.classList.toggle("hidden");
  
      const isExpanded = chevron.attributes["aria-expanded"].value === "true";
      setUpContainer.addEventListener("keyup", handleSetUpGuideMenuEscKeyPress);
  
      if (isExpanded) {
        closeSetUpGuide();
      } else {
        openSetUpGuide();
      }
    }
    const notificationIcon = document.querySelector("#notificationIcon");
    notificationIcon.addEventListener("click", toggleNotificationBox);
  
    dashboardMenuBtn.addEventListener("click", toggleMenu);
  
    function cancelTrialCallOut() {
      const trailCallout = document.querySelector("#trial-callout");
      cancelTrailButton.addEventListener("click", function () {
        trailCallout.classList.add("hidden");
      });
  
      cancelTrailButton.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          trailCallout.classList.add("hidden");
        }
      });
    }
  
    cancelTrialCallOut();
    chevron.addEventListener("click", toggleSetUpGuide);
  
    function handleMarkAsChecked(
      element,
      checkboxButton,
      notCompletedIcon,
      completedIcon,
      loadingSpinnerIcon,
      setupGuideCheckBoxStatus
    ) {
      notCompletedIcon.classList.add(HIDDEN_CLASS);
      loadingSpinnerIcon.classList.remove(HIDDEN_CLASS);
  
      setupGuideCheckBoxStatus.ariaLabel = "Loading, please wait";
      setTimeout(() => {
        loadingSpinnerIcon.classList.add(HIDDEN_CLASS);
        completedIcon.classList.remove(HIDDEN_CLASS);
  
        element.classList.replace("not-checked", "check");
        const checkboxNextItem = document.querySelector(".not-checked");
        if (checkboxNextItem) {
          hideCurrentContent = document.querySelectorAll(".show-guide");
          const activeGuide = document.querySelector(".guide-content-active");
          activeGuide.classList.remove("guide-content-active");
  
          hideCurrentContent.forEach((element) => {
            element.classList.replace("show-guide", "hidden");
          });
  
          checkboxNextItem
            .querySelector("#guideTextContent")
            .classList.replace("hidden", "show-guide");
          checkboxNextItem
            .querySelector("#guideImageContent")
            .classList.replace("hidden", "show-guide");
          checkboxNextItem.classList.add("guide-content-active");
        }
        const progressStep = document.createElement("div");
        progressStep.style.cssText =
          "width: 20px; height:100%; background-color: #000;";
        document.querySelector(".progress-bar").appendChild(progressStep);
  
        progressStepsCompleted = progressStepsCompleted + 1;
        progressCompleted.textContent = progressStepsCompleted;
  
        checkboxButton.ariaLabel = checkboxButton.ariaLabel.replace(
          "check",
          "uncheck"
        );
        setupGuideCheckBoxStatus.ariaLabel = `Successfully checked customize your online store, ${progressStepsCompleted} completed out of 5 steps`;
  
        checkboxButton.classList.add(MARK_AS_CHECKED_CLASS);
      }, 1000);
    }
  
    function handleMarkAsNotChecked(
      element,
      checkboxButton,
      notCompletedIcon,
      completedIcon,
      loadingSpinnerIcon,
      setupGuideCheckBoxStatus
    ) {
      completedIcon.classList.add(HIDDEN_CLASS);
      loadingSpinnerIcon.classList.remove(HIDDEN_CLASS);
      setupGuideCheckBoxStatus.ariaLabel = "Loading, please wait";
  
      setTimeout(() => {
        loadingSpinnerIcon.classList.add(HIDDEN_CLASS);
        notCompletedIcon.classList.remove(HIDDEN_CLASS);
        element.classList.replace("check", "not-checked");
  
        const progressBar = document.querySelector(".progress-bar");
        document
          .querySelector(".progress-bar")
          .removeChild(progressBar.lastElementChild);
  
        progressStepsCompleted = progressStepsCompleted - 1;
        progressCompleted.textContent = progressStepsCompleted;
  
        checkboxButton.ariaLabel = checkboxButton.ariaLabel.replace(
          "uncheck",
          "check"
        );
        setupGuideCheckBoxStatus.ariaLabel = `Successfully unchecked customize your online store, ${progressStepsCompleted} completed out of 5 steps`;
        checkboxButton.classList.remove(MARK_AS_CHECKED_CLASS);
      }, 1000);
    }
  
    function handleCheckedorNotChecked(element) {
      const checkboxButton = element.querySelector("#setupGuideCheckbox");
  
      const notCompletedIcon = checkboxButton.querySelector("#notCompletedIcon");
      const completedIcon = checkboxButton.querySelector("#completedIcon");
      const loadingSpinnerIcon = checkboxButton.querySelector(
        "#loadingSpinnerIcon"
      );
      const setupGuideCheckBoxStatus = element.querySelector(
        "#setupGuidecheckboxStatus"
      );
      isButtonChecked = checkboxButton.classList.contains(MARK_AS_CHECKED_CLASS);
  
      if (isButtonChecked) {
        handleMarkAsNotChecked(
          element,
          checkboxButton,
          notCompletedIcon,
          completedIcon,
          loadingSpinnerIcon,
          setupGuideCheckBoxStatus
        );
      } else {
        handleMarkAsChecked(
          element,
          checkboxButton,
          notCompletedIcon,
          completedIcon,
          loadingSpinnerIcon,
          setupGuideCheckBoxStatus
        );
      }
    }
  
    addEventListenerToOpenGuideItems();
    document
      .querySelector(".select-payment")
      .addEventListener("click", function () {
        window.location.href = "http://shopify.com/pricing";
      });
  }
  
  app();
  