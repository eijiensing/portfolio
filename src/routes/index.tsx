import { createFileRoute } from '@tanstack/solid-router'
import HelloKitty from "/assets/hellokitty.gif"
import RainbowDash from "/assets/rainbowdash.gif"
import Flower from "/assets/flower.png"
import Eiji from "/assets/eiji.webp"

export const Route = createFileRoute('/')({ component: Home })

function Home() {
	return (
		<div class="flex flex-col items-center w-full">
			<div class="max-w-7xl w-full">
				<div class="flex flex-row items-center">
					<img class="w-48" src={HelloKitty} />
					<h1 class="text-8xl font-bold text-center text-text">Welcome to my site!</h1>
					<img class="w-48" src={RainbowDash} />
				</div>
				<div class="flex justify-center">
					<img class="h-32" src={Flower} />
					<img class="h-32" src={Flower} />
					<img class="h-32" src={Flower} />
					<img class="h-32" src={Flower} />
					<img class="h-32" src={Flower} />
					<img class="h-32" src={Flower} />
					<img class="h-32" src={Flower} />
					<img class="h-32" src={Flower} />
					<img class="h-32" src={Flower} />
					<img class="h-32" src={Flower} />
				</div>
				<div class="flex flex-col items-center relative rounded-3xl bg-secondary/50 p-8">
					<h2 class="text-4xl text-primary">Have you <b class="text-6xl font-bold">seen</b> this man?</h2>
					<div class="flex flex-row">
						<img class="border-black border-6" src={Eiji} />
						<div class="flex flex-col gap-2 p-4 text-text">
							<h3 class="text-3xl">EVER DREAM THIS MAN? EVERY NIGHT THROUGHOUT THE WORLD HUNDREDS OF PEOPLE DREAM ABOUT THIS FACE</h3>
							<p>His name: Eiji Ensing</p>
							<p>Estimated age: {Math.floor(Math.random() * 100)}</p>
							<p>Track this man: <a class="text-primary underline" href="https://github.com/eijiensing">https://github.com/eijiensing</a></p>
						</div>
					</div>
				</div>
				<div class="bg-accent">
				</div>
			</div>
		</div >
	)
}
