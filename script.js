document.addEventListener("DOMContentLoaded", function ()
{
  const button1 = document.querySelector(".button1");
  const button2 = document.querySelector(".button2");
  const button3 = document.querySelector(".button3");
  const button4 = document.querySelector(".button4");

  const gradientContainer = document.getElementById('gradient-container');
  const storedGradient = localStorage.getItem('backgroundGradient');
  if (storedGradient && gradientContainer)
  {
    gradientContainer.style.backgroundImage = storedGradient;
  }

  if (button1)
  {
    button1.addEventListener("click", function ()
    {
      transitionPage('https://ondm.github.io/calc/');
    });
  }

  if (button2)
  {
    button2.addEventListener("click", function ()
    {
      transitionPage('https://ondm.github.io/prazdniny/');
    });
  }

  if (button3)
  {
    button3.addEventListener("click", function ()
    {
      transitionPage('https://ondm.github.io/cetba/');
    });
  }

  if (button4)
  {
    button4.addEventListener("click", function ()
    {
      transitionPage('https://ondm.github.io/epoprg/');
    });
  }

  function transitionPage(url)
  {
    document.body.classList.add('page-hidden');
    setTimeout(function ()
    {
      window.location.href = url;
    }, 600);
  }

  window.addEventListener('pageshow', function (event)
  {
    if (event.persisted)
    {
      document.body.classList.remove('page-hidden');
      playAnimation();
    }
  });

  function playAnimation()
  {
    const ondElement = document.getElementById('ond');
    if (ondElement) {
      ondElement.classList.add('text-ond-animation');
    }
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button =>
    {
      button.classList.add('button-animation');
    });
  }

  if (gradientContainer) {
    localStorage.setItem('backgroundGradient', window.getComputedStyle(gradientContainer).backgroundImage);
  }
});

// Vločky
document.addEventListener("DOMContentLoaded", function ()
{
  const snowflakesContainer = document.getElementById("snowflakes-container");
  if (!snowflakesContainer) return;

  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 11, 10);    // 10. prosinec
  const endDate = new Date(currentDate.getFullYear() + 1, 0, 5);    // 5. leden

  if (currentDate >= startDate && currentDate < endDate)
  {
    const numberOfSnowflakes = 100; // Optimalizovaný počet pro menu
    const snowflakes = [];

    function random(min, max) { return Math.random() * (max - min) + min; }

    class Snowflake
    {
      constructor()
      {
        this.element = document.createElement("div");
        this.element.className = "snowflake";
        this.element.innerHTML = "*";
        snowflakesContainer.appendChild(this.element);

        this.x = random(0, window.innerWidth);
        this.y = random(-window.innerHeight, 0);
        this.size = random(8, 22);
        this.speedX = random(-0.4, 0.4);
        this.speedY = random(0.6, 1.6);
      }

      update()
      {
        this.y += this.speedY;
        this.x += this.speedX;

        if (this.y > window.innerHeight)
        {
          this.y = -10;
          this.x = random(0, window.innerWidth);
        }

        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
        this.element.style.fontSize = `${this.size}px`;
      }
    }

    for (let i = 0; i < numberOfSnowflakes; i++)
    {
      snowflakes.push(new Snowflake());
    }

    function moveSnowflakes()
    {
      for (let i = 0; i < snowflakes.length; i++)
      {
        snowflakes[i].update();
      }
      requestAnimationFrame(moveSnowflakes);
    }

    moveSnowflakes();
  }
});
