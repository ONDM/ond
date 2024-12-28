document.addEventListener("DOMContentLoaded", function ()
{
  const button1 = document.querySelector(".button1");
  const button2 = document.querySelector(".button2");
  const button3 = document.querySelector(".button3");
  const button4 = document.querySelector(".button4");

  const gradientContainer = document.getElementById('gradient-container');
  const storedGradient = localStorage.getItem('backgroundGradient');
  if (storedGradient)
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
      transitionPage('https://ondm.github.io/cetba/');
    });
  }

  if (button3)
  {
    button3.addEventListener("click", function ()
    {
      transitionPage('https://ondm.github.io/emat/');
    });
  }

    if (button4)
  {
    button4.addEventListener("click", function ()
    {
      transitionPage('https://ondm.github.io/prehled/');
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
    document.getElementById('ond').classList.add('text-ond-animation');
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button =>
    {
      button.classList.add('button-animation');
    });
  }

  localStorage.setItem('backgroundGradient', window.getComputedStyle(gradientContainer).backgroundImage);
});

document.addEventListener("DOMContentLoaded", function ()
{
  const textOND = document.querySelector(".text-ond");
  const imageOverlay = document.createElement("img");
  imageOverlay.src = "/ond/ondlogo.png";
  imageOverlay.classList.add("image-overlay");
  textOND.appendChild(imageOverlay);
});

document.addEventListener("DOMContentLoaded", function ()
{
  const snowflakesContainer = document.getElementById("snowflakes-container");
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 11, 10);    // datum se indexuje od 0 po 11, takže 0 = leden a 11 = prosinec
  const endDate = new Date(currentDate.getFullYear(), 0, 1);    // datum se indexuje od 0 po 11, takže 0 = leden a 11 = prosinec

  if (currentDate >= startDate && currentDate < endDate)
  {
    const numberOfSnowflakes = 500;
    const snowflakes = [];

    function random(min, max)
    {
      return Math.random() * (max - min) + min;
    }

    class Snowflake
    {
      constructor()
      {
        this.element = document.createElement("div");
        this.element.className = "snowflake";
        this.element.innerHTML = "*";
        snowflakesContainer.appendChild(this.element);

        this.x = random(0, window.innerWidth);
        this.y = 0;
        this.size = random(5, 18);
        this.speedX = random(-0.5, 0.5);
        this.speedY = random(0.5, 1.5);
      }

      update()
      {
        this.y += this.speedY;
        this.x += this.speedX;

        if (this.y > window.innerHeight)
        {
          this.y = 0;
          this.x = random(0, window.innerWidth);
        }

        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
        this.element.style.fontSize = `${this.size}px`;
      }
    }

    function createSnowflake()
    {
      snowflakes.push(new Snowflake());
    }

    function createSnowflakeGroup(groupSize, delay)
    {
      for (let i = 0; i < groupSize; i++)
      {
        setTimeout(createSnowflake, i * delay);
      }
    }

    function moveSnowflakes()
    {
      for (let i = 0; i < snowflakes.length; i++)
      {
        snowflakes[i].update();
      }
      requestAnimationFrame(moveSnowflakes);
    }

    createSnowflakeGroup(numberOfSnowflakes, 200);
    moveSnowflakes();
  }
});
