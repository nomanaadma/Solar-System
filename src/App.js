import "./App.css";
import { useEffect, useRef } from 'react';
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";

function App() {
	
	let options = {
		iterations: Infinity,
		orbit: {
			keyframes: [
				{ 
					transform: 'rotateZ(0deg)'
				},
				{ 
					transform: 'rotateZ(-360deg)'
				}
			]
		},
		invert: {
			keyframes: [
				{ 
					transform: 'rotateX(-90deg) rotateY(360deg) rotateZ(0deg)'
				},
				{ 
					transform: 'rotateX(-90deg) rotateY(0deg) rotateZ(0deg)'
				}
			]
		},
		mercury: {
			duration: 2890.16,
			shadow: [
				{
					offset: 0,
					boxShadow: 'inset 0 0 1px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.25,
					boxShadow: 'inset 4px 0 2px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.50,
					boxShadow: 'inset 13px -5px 4px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.5001,
					boxShadow: 'inset -13px -5px 4px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.75,
					boxShadow: 'inset -4px 0 2px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 1,
					boxShadow: 'inset 0 0 1px rgba(0, 0, 0, 0.5)'
				}
			]
		},
		venus: {
			duration: 7382.37,
			shadow: [
				{
					offset: 0,
					boxShadow: 'inset 4px 0 2px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.25,
					boxShadow: 'inset 22px -20px 10px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.255,
					boxShadow: 'inset -22px -20px 10px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.50,
					boxShadow: 'inset -4px 0 2px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.75,
					boxShadow: 'inset 0 0 1px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 1,
					boxShadow: 'inset 4px 0 2px rgba(0, 0, 0, 0.5)'
				}
			]
		},
		earth: {
			duration: 12000.21,
			shadow: [
				{
					offset: 0,
					boxShadow: 'inset -4px 0 2px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.25,
					boxShadow: 'inset 0 0 1px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.50,
					boxShadow: 'inset 4px 0 2px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.75,
					boxShadow: 'inset 24px -20px 15px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.7501,
					boxShadow: 'inset -24px -20px 15px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 1,
					boxShadow: 'inset -4px 0 2px rgba(0, 0, 0, 0.5)'
				}
			]
		},
		moon: {
			duration: 897.64,
			keyframes: [
				{ 
					transform: 'rotateX(90deg) rotateZ(0deg)'
				},
				{ 
					transform: 'rotateX(90deg) rotateZ(-360deg)'
				}
			]
		},
		mars: {
			duration: 22570.17,
			shadow: [
				{
					offset: 0,
					boxShadow: 'inset -18px -10px 10px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.25,
					boxShadow: 'inset -4px 0 2px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.50,
					boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.75,
					boxShadow: 'inset 4px 0 2px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.9999,
					boxShadow: 'inset 18px -10px 10px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 1,
					boxShadow: 'inset -18px -10px 10px rgba(0, 0, 0, 0.5)'
				}
			]
		},
		jupiter: {
			duration: 142351.38,
			shadow: [
				{
					offset: 0,
					boxShadow: 'inset -16px 0 5px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.25,
					boxShadow: 'inset 0 3px 2px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.50,
					boxShadow: 'inset 16px 0 5px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.75,
					boxShadow: 'inset 94px -30px 40px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.7501,
					boxShadow: 'inset -94px -30px 40px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 1,
					boxShadow: 'inset -16px 0 5px rgba(0, 0, 0, 0.5)'
				}
			]
		},
		saturn: {
			duration: 353369.98,
			shadow: [
				{
					offset: 0,
					boxShadow: 'inset 16px 0 5px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.25,
					boxShadow: 'inset 80px -30px 50px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.2501,
					boxShadow: 'inset -94px -30px 40px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.50,
					boxShadow: 'inset -16px 0 5px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.75,
					boxShadow: 'inset -2px 3px 2px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 1,
					boxShadow: 'inset 16px 0 5px rgba(0, 0, 0, 0.5)'
				}
			]
		},
		uranus: {
			duration: 1008202.15,
			shadow: [
				{
					offset: 0,
					boxShadow: 'inset 8px 0 5px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.25,
					boxShadow: 'inset 40px -15px 40px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.2501,
					boxShadow: 'inset -40px -15px 40px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.50,
					boxShadow: 'inset -8px 0 5px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.75,
					boxShadow: 'inset 0 0 2px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 1,
					boxShadow: 'inset 8px 0 5px rgba(0, 0, 0, 0.5)'
				}
			]
		},
		neptune: {
			duration: 1977495.84,
			shadow: [
				{
					offset: 0,
					boxShadow: 'inset 0 0 2px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.25,
					boxShadow: 'inset 12px 0 5px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.50,
					boxShadow: 'inset 50px -15px 40px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.5001,
					boxShadow: 'inset -50px -15px 40px rgba(0, 0, 0, 0.5)'
				},
				{
					offset: 0.75,
					boxShadow: 'inset -12px 0 5px rgba(41, 27, 27, 0.5)'
				},
				{
					offset: 1,
					boxShadow: 'inset 0 0 2px rgba(0, 0, 0, 0.5)'
				}
			]
		}
	};

	const body = useRef(null);
	const orbits = useRef({});

	useEffect(() => {
		
		setTimeout(() => {
			
			
			body.current.classList.remove('view-2D');
			body.current.classList.remove('opening');
			body.current.classList.add('view-3D');
			body.current.classList.remove('hide-UI');

		}, 200);

	}, []);


	// const orbitsKeys = Object.keys(orbits.current);

	// for (let key of orbitsKeys) {	

		const key = 'earth';
		
		// const ref = orbits.current[key];

		const keyframes = key === 'moon' ? options[key].keyframes : options.orbit.keyframes,
			timing = { iterations: options.iterations, duration: options[key].duration };

		const { ref } = useWebAnimations({ keyframes, timing });
	// }


	return (
		<div className="opening hide-UI view-2D zoom-large data-close controls-close" ref={body}>
			<div id="data">
				<a className="sun" title="sun" href="#sunspeed">
					Sun
				</a>
				<a className="mercury" title="mercury" href="#mercuryspeed">
					Mercury
				</a>
				<a className="venus" title="venus" href="#venusspeed">
					Venus
				</a>
				<a className="earth active" title="earth" href="#earthspeed">
					Earth
				</a>
				<a className="mars" title="mars" href="#marsspeed">
					Mars
				</a>
				<a className="jupiter" title="jupiter" href="#jupiterspeed">
					Jupiter
				</a>
				<a className="saturn" title="saturn" href="#saturnspeed">
					Saturn
				</a>
				<a className="uranus" title="uranus" href="#uranusspeed">
					Uranus
				</a>
				<a className="neptune" title="neptune" href="#neptunespeed">
					Neptune
				</a>
			</div>
			<div id="universe" className="scale-stretched">
				<div id="galaxy">
					<div id="solar-system" className="earth">
						<div id="mercury" className="orbit">
							<div className="pos">
								<div className="planet">
									<dl className="infos">
										<dt>Mercury</dt>
										<dd>
											<span></span>
										</dd>
									</dl>
								</div>
							</div>
						</div>
						<div id="venus" className="orbit" ref={el => orbits.current['venus'] = el} >
							<div className="pos">
								<div className="planet">
									<dl className="infos">
										<dt>Venus</dt>
										<dd>
											<span></span>
										</dd>
									</dl>
								</div>
							</div>
						</div>
						<div id="earth" className="orbit" ref={ref} >
							<div className="pos">
								<div id="moon" className="orbit" ref={el => orbits.current['moon'] = el} >
									<div className="pos">
										<div className="moon"></div>
									</div>
								</div>
								<div className="planet">
									<dl className="infos">
										<dt>Earth</dt>
										<dd>
											<span></span>
										</dd>
									</dl>
								</div>
							</div>
						</div>
						<div id="mars" className="orbit" ref={el => orbits.current['mars'] = el} >
							<div className="pos">
								<div className="planet">
									<dl className="infos">
										<dt>Mars</dt>
										<dd>
											<span></span>
										</dd>
									</dl>
								</div>
							</div>
						</div>
						<div id="jupiter" className="orbit" ref={el => orbits.current['jupiter'] = el}>
							<div className="pos">
								<div className="planet">
									<dl className="infos">
										<dt>Jupiter</dt>
										<dd>
											<span></span>
										</dd>
									</dl>
								</div>
							</div>
						</div>
						<div id="saturn" className="orbit" ref={el => orbits.current['saturn'] = el}>
							<div className="pos">
								<div className="planet">
									<div className="ring"></div>
									<dl className="infos">
										<dt>Saturn</dt>
										<dd>
											<span></span>
										</dd>
									</dl>
								</div>
							</div>
						</div>
						<div id="uranus" className="orbit" ref={el => orbits.current['uranus'] = el}>
							<div className="pos">
								<div className="planet">
									<dl className="infos">
										<dt>Uranus</dt>
										<dd>
											<span></span>
										</dd>
									</dl>
								</div>
							</div>
						</div>
						<div id="neptune" className="orbit" ref={el => orbits.current['neptune'] = el}>
							<div className="pos">
								<div className="planet">
									<dl className="infos">
										<dt>Neptune</dt>
										<dd>
											<span></span>
										</dd>
									</dl>
								</div>
							</div>
						</div>
						<div id="sun" >
							<dl className="infos">
								<dt>Sun</dt>
								<dd>
									<span></span>
								</dd>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
