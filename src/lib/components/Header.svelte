<script>
	import Subscribe from './Subscribe.svelte';
</script>

<header>
	<h1>MADAME SUPERSTAR</h1>
</header>

<ul>
	<!-- print "home" -->
	<li>
		<a href="/about"> ABOUT </a>
	</li>
	<li>
		<a href="/">HOME </a>
	</li>
	<!-- link to the resume in my static/resume, open in a new tab -->
	<li>
		<a href="/resume/Resume_Gee_Sophie_2022.pdf" target="_blank">RESUME</a>
	</li>
	<li><a href="mailto:sophieggee@icloud.com" target="_blank">CONTACT</a></li>
	<li>
		<Subscribe />
	</li>
</ul>

<svelte:head>
	<link rel="preconnect" href="https://rsms.me/" />
	<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</svelte:head>

<!-- make background light pink -->
<style>
	:global(body) {
		background: rgb(255, 201, 240);
		margin: 0;
		padding: 0;
		font-family: 'Inter var', 'Inter', sans-serif;
	}
	h1 {
		color: rgb(255, 201, 240);
		padding: 0;
		margin: 0;
		font-size: 2rem;
		font-weight: 600;
		/* apply marquee */
		white-space: nowrap;
		/* overflow: hidden; */
	}
	ul {
		color: rgb(220, 0, 0);
		padding: 1rem 0 0 0;
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
		text-align: center;
		display: flex;
		justify-content: center;
		gap: 1rem;
		list-style-type: none;
	}

	@media (max-width: 800px) {
		ul {
			font-size: 0.7rem;
		}
		/* CSS that should be displayed if width is equal to or less than 800px goes here */
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	header {
		background: rgb(220, 0, 0);
		padding: 0 1rem;
		overflow: hidden;
	}
</style>
