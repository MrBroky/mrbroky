<script>
  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";

  let backgroundImage = "./heroPhoto.png"
  let youtubeURL = "https://www.youtube.com/mrbroky"
  let youtubePhoto = "./youtubePhoto.png"
  let twitchURL = "https://www.twitch.tv/mrbroky"
  let twitchPhoto = "./twitchPhoto.jpeg"
  let instagramURL = "https://www.instagram.com/mrbroky"
  let instagramPhoto = "instagramPhoto.png"
  let youtubeClip1 = "https://www.youtube.com/embed/PVJs596rp2o?start=335"
  let twitterURL = "https://www.twitter.com/Mr_Broky"
  let tiktokURL = "https://www.tiktok.com/@mrbroky?"
  let mrBroky = "MrBroky"
</script>

<main>
  <div class="navbar bg-base-100">
    <a href={youtubeURL} class="btn btn-ghost normal-case text-xl">{mrBroky}</a>
  </div>

  <div
    class="hero min-h-screen"
    style="background-image: url({backgroundImage});"
  >
    <div class="hero-overlay bg-opacity-60" />
    <div class="text-center hero-content text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">{mrBroky}</h1>
        <p class="mb-5">Just a guy with a dream.</p>
      </div>
    </div>
  </div>

  <div />

  <!-- <div class="flex justify-center "> -->
  <div class="flex justify-around mt-6 ">
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={twitchPhoto}
          alt="Shoes"
          class="rounded-xl mask mask-hexagon"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Watch me LIVE!</h2>
        <p>Rocket League, Minecraft, Phasmophobia, and more.</p>
        <div class="card-actions">
          <button class="btn btn-primary">
            <a href={twitchURL}>Twitch</a>
          </button>
        </div>
      </div>
    </div>
    <!-- <div class="card shadow-xl image-full"> -->
    <div class="card w-96 shadow-xl bg-accent text-accent-content">
      <figure class="px-10 pt-10">
        <img
          src={youtubePhoto}
          alt="Shoes"
          class="rounded-xl mask mask-hexagon"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Watch more of my videos!</h2>
        <p>Videos, Hightlights, Shorts and Vlogs(coming soon)</p>
        <div class="card-actions">
          <button
            class="btn btn-primary"
          >
          <a href={youtubeURL}>YouTube</a>
        </button>
        </div>
      </div>
    </div>
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={instagramPhoto}
          alt="Shoes"
          class="rounded-xl mask mask-hexagon"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Follow Me!</h2>
        <p>Posts, Clips, Reactions, Stories and Direct Message(DM).</p>
        <div class="card-actions">
          <button
            class="btn btn-primary"
          >
            <a href={instagramURL}>Instagram</a>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-4 mt-6 gap-4" />
  <div class="border mockup-window bg-base-300">
    <div class="flex justify-center px-4 py-16 bg-base-200">
      <iframe
        width="560"
        height="315"
        src={youtubeClip1}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>

  <footer class="items-center mt-6 p-4 footer bg-neutral text-neutral-content">
    <div class="items-center grid-flow-col">
      <p>Copyright © 2022 Jethzabell Medina</p>
    </div> 
    <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      
      <a href={instagramURL}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>
      </a>

      <a href={twitterURL}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
        </svg>
      </a>

      <a href={tiktokURL}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
        </svg>
      </a>
    </div>
  </footer>

</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
