<script lang="ts">
	import { clickOutside } from '../clickOutside';

	import { rebalance } from '../rebalance';

	let email = '';
	let popup = false;

	async function subscribe() {
		const url = 'https://api.sheety.co/3ad728613feef6317fc24b4dd610fd0f/subscribeToEmails/sheet1';
		const body = {
			sheet1: {
				email: email
			}
		};

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});

		const data = await response.json();

		email = '';
		popup = false;
	}
</script>

<button on:click={() => (popup = true)}>SUBSCRIBE</button>

{#if popup}
	<main class="popup-window">
		<section class="popup-card" use:clickOutside on:click_outside={() => (popup = false)}>
			<h1 use:rebalance>ENTER YOUR EMAIL FOR POST NOTIFICATIONS.</h1>
			<input type="email" bind:value={email} placeholder="" />
			<button on:click={subscribe}>SUBSCRIBE</button>
			<button on:click={() => (popup = false)} class="close">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="icon"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</button>
		</section>
	</main>
{/if}

<!-- make background light pink -->
<style>
	.popup-window {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(225, 225, 225, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}
	.popup-card {
		position: relative;
		background: rgb(220, 0, 0);
		padding: 4rem 4rem;
		gap: 1rem;
		max-width: 500px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.popup-card h1 {
		color: rgb(255, 201, 240);
		text-align: center;
	}
	.popup-card button {
		color: rgb(255, 201, 240);
		text-align: center;
		font-weight: 600;
		font-size: 1.5rem;
	}
	.popup-card input {
		color: rgb(220, 0, 0);
		background: rgb(255, 237, 250);
		text-align: center;
		font-weight: 350;
		font-size: 1.5rem;
		padding: 0.5rem;
		border: none;
	}
	.close {
		position: absolute;
		top: 0;
		right: 0;
		margin: 1rem;
	}

	.close .icon {
		width: 2rem;
		height: 2rem;
	}
</style>
