
      const popoverTriggerList = document.querySelectorAll(
        '[data-bs-toggle="popover"]'
      );
      const popoverList = [...popoverTriggerList].map(
        (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
      );

      $(document).ready(function () {
        $('[data-toggle="popover"]').popover({
          trigger: "hover",
        });
      });

      //Image Carousal Script for Slide
      const buttons = document.querySelectorAll(".carousal-button");
      const imgContainer = document.querySelector(".imgContainer");

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const slideNumber = button.getAttribute("data-slide");
          document.querySelectorAll(".slide_div").forEach((slide) => {
            slide.classList.remove("active");
          });
          button.parentElement.classList.add("active");
          imgContainer.setAttribute("data-slide", slideNumber);
        });
      });

      //Location Buttons
      function goToGithub() {
        window.location.href = "https://github.com/The-Reaperx";
      }

      const messages = [
        {
          title: "مهمتنا",
          body: "تقديم تعليم هندسي عالي الجودة يمكن الطلاب من التفوق في مجالاتهم ويجعلهم قادة في المستقبل",
        },
        {
          title: "قيمنا",
          body: "الالتزام بالتميز، الابتكار، المسؤولية الاجتماعية، والتعاون الدولي لتعزيز المعرفة والتكنولوجيا",
        },
        {
          title: "رؤيتنا",
          body: "تحقيق التفوق في تصميم وتطوير أنظمة هندسية مستدامة وذكية، وتعزيز البحث والابتكار، وإعداد مهندسين متميزين، مع التركيز على التعاون والشراكات لحل التحديات الصناعية والمجتمعية",
        },
      ];

      let currentIndex = 0;

      function updateText() {
        const heroTitle = document.getElementById("hero-title");
        const heroBody = document.getElementById("hero-body");

        heroTitle.classList.remove("fade");
        heroBody.classList.remove("fade");

        setTimeout(() => {
          heroTitle.textContent = messages[currentIndex].title;
          heroBody.textContent = messages[currentIndex].body;

          heroTitle.classList.add("fade");
          heroBody.classList.add("fade");

          const indicators = document.querySelectorAll(
            ".carousel-indicators button"
          );
          indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentIndex);
          });

          currentIndex = (currentIndex + 1) % messages.length;
        }, 1000);
      }

      function setIndicatorClickHandlers() {
        const indicators = document.querySelectorAll(
          ".carousel-indicators button"
        );
        indicators.forEach((indicator, index) => {
          indicator.addEventListener("click", () => {
            currentIndex = index;
            updateText();
          });
        });
      }

      setIndicatorClickHandlers();
      setInterval(updateText, 4000);
