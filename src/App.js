import "./App.css";
import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-web-animation';

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
	const [activePlanet, setActivePlanet] = useState('earth');

	useEffect(() => {
		
		setTimeout(() => {
			
			body.current.classList.remove('view-2D');
			body.current.classList.remove('opening');
			body.current.classList.add('view-3D');
			body.current.classList.remove('hide-UI');

		}, 200);

	}, []);

	function getTiming(key) {
		return {duration: options[key].duration, iterations: options.iterations };
	}

	function getkeyframes(key) {
		return key === 'moon' ? options[key].keyframes : options.orbit.keyframes;
	}

	function getshadowkeyframes(key) {
		return options[key].shadow;
	}

	// document.querySelectorAll('.orbit').forEach((orbit) => {
			
	// 	let keyFrame = orbit.id == 'moon' ? options[orbit.id].keyframes : options.orbit.keyframes,
	// 		orbitOptions = { iterations: options.iterations, duration: options[orbit.id].duration, transformStyle: 'preserve-3d' };
			
	// 	orbit.animate(keyFrame, orbitOptions);
	// 	orbit.querySelector('.pos').animate(options.invert.keyframes, orbitOptions);
		
	// 	if(orbit.id != 'moon' )
	// 		orbit.querySelector('.planet').animate(options[orbit.id].shadow, orbitOptions);

	// });

	return (
		<div className="opening hide-UI view-2D zoom-large data-close controls-close" ref={body}>
			<div id="data">
				<a onClick={ e => { e.preventDefault(); setActivePlanet('sun'); }} className={'sun '+(activePlanet === 'sun' ? 'active' : '')} title="sun" href="#sun">
					Sun
				</a>
				<a onClick={ e => { e.preventDefault(); setActivePlanet('mercury'); }} className={'mercury '+(activePlanet === 'mercury' ? 'active' : '')} title="mercury" href="#mercury">
					Mercury
				</a>
				<a onClick={ e => { e.preventDefault(); setActivePlanet('venus'); }} className={'venus '+(activePlanet === 'venus' ? 'active' : '')} title="venus" href="#venus">
					Venus
				</a>
				<a onClick={ e => { e.preventDefault(); setActivePlanet('earth'); }} className={'earth '+(activePlanet === 'earth' ? 'active' : '')} title="earth" href="#earth">
					Earth
				</a>
				<a onClick={ e => { e.preventDefault(); setActivePlanet('mars'); }} className={'mars '+(activePlanet === 'mars' ? 'active' : '')} title="mars" href="#mars">
					Mars
				</a>
				<a onClick={ e => { e.preventDefault(); setActivePlanet('jupiter'); }} className={'jupiter '+(activePlanet === 'jupiter' ? 'active' : '')} title="jupiter" href="#jupiter">
					Jupiter
				</a>
				<a onClick={ e => { e.preventDefault(); setActivePlanet('saturn'); }} className={'saturn '+(activePlanet === 'saturn' ? 'active' : '')} title="saturn" href="#saturn">
					Saturn
				</a>
				<a onClick={ e => { e.preventDefault(); setActivePlanet('uranus'); }} className={'uranus '+(activePlanet === 'uranus' ? 'active' : '')} title="uranus" href="#uranus">
					Uranus
				</a>
				<a onClick={ e => { e.preventDefault(); setActivePlanet('neptune'); }} className={'neptune '+(activePlanet === 'neptune' ? 'active' : '')} title="neptune" href="#neptune">
					Neptune
				</a>
			</div>
			<div id="universe" className="scale-stretched">
				<div id="galaxy">
					<div id="solar-system" className={activePlanet}>
						<Animated.div id="mercury" className="orbit" keyframes={getkeyframes('mercury')} timing={getTiming('mercury')}>
							<Animated.div className="pos" keyframes={options.invert.keyframes} timing={getTiming('mercury')}>
								<Animated.div className="planet" keyframes={getshadowkeyframes('mercury')} timing={getTiming('mercury')}>
									<dl className="infos">
										<dt>Mercury</dt>
										<dd>
											<span></span>
										</dd>
									</dl>
								</Animated.div>
							</Animated.div>
						</Animated.div>
						<Animated.div id="venus" className="orbit" keyframes={getkeyframes('venus')} timing={getTiming('venus')}>
							<Animated.div className="pos" keyframes={options.invert.keyframes} timing={getTiming('venus')}>
								<Animated.div className="planet" keyframes={getshadowkeyframes('venus')} timing={getTiming('venus')}>
									<dl className="infos">
										<dt>Venus</dt>
										<dd>
											<span></span>
										</dd>
									</dl>
								</Animated.div>
							</Animated.div>
						</Animated.div>
						<Animated.div id="earth" className="orbit" keyframes={getkeyframes('earth')} timing={getTiming('earth')}>
							<Animated.div className="pos" keyframes={options.invert.keyframes} timing={getTiming('earth')}>
								<Animated.div id="moon" className="orbit" keyframes={getkeyframes('moon')} timing={getTiming('moon')}>
									<Animated.div className="pos" keyframes={options.invert.keyframes} timing={getTiming('moon')}>
										<div className="moon"></div>
									</Animated.div>
								</Animated.div>
								<Animated.div className="planet" keyframes={getshadowkeyframes('earth')} timing={getTiming('earth')}>
									<dl className="infos">
										<dt>Earth</dt>
										<dd>
											<span></span>
										</dd>
									</dl>
								</Animated.div>
							</Animated.div>
						</Animated.div>
						<Animated.div id="mars" className="orbit" keyframes={getkeyframes('mars')} timing={getTiming('mars')}>
							<Animated.div className="pos" keyframes={options.invert.keyframes} timing={getTiming('mars')}>
								<Animated.div className="planet" keyframes={getshadowkeyframes('mars')} timing={getTiming('mars')}>
									<dl className="infos">
										<dt>Mars</dt>
										<dd>
											<span></span>
										</dd>
									</dl>
								</Animated.div>
							</Animated.div>
						</Animated.div>
						<Animated.div id="jupiter" className="orbit" keyframes={getkeyframes('jupiter')} timing={getTiming('jupiter')}>
							<Animated.div className="pos" keyframes={options.invert.keyframes} timing={getTiming('jupiter')}>
								<Animated.div className="planet" keyframes={getshadowkeyframes('jupiter')} timing={getTiming('jupiter')}>
									<dl className="infos">
										<dt>Jupiter</dt>
										<dd>
											<span></span>
										</dd>
									</dl>
								</Animated.div>
							</Animated.div>
						</Animated.div>
						<Animated.div id="saturn" className="orbit" keyframes={getkeyframes('saturn')} timing={getTiming('saturn')}>
							<Animated.div className="pos" keyframes={options.invert.keyframes} timing={getTiming('saturn')}>
								<Animated.div className="planet" keyframes={getshadowkeyframes('saturn')} timing={getTiming('saturn')}>
									<div className="ring"></div>
									<dl className="infos">
										<dt>Saturn</dt>
										<dd>
											<span></span>
										</dd>
									</dl>
								</Animated.div>
							</Animated.div>
						</Animated.div>
						<Animated.div id="uranus" className="orbit" keyframes={getkeyframes('uranus')} timing={getTiming('uranus')}>
							<Animated.div className="pos" keyframes={options.invert.keyframes} timing={getTiming('uranus')}>
								<Animated.div className="planet" keyframes={getshadowkeyframes('uranus')} timing={getTiming('uranus')}>
									<dl className="infos">
										<dt>Uranus</dt>
										<dd>
											<span></span>
										</dd>
									</dl>
								</Animated.div>
							</Animated.div>
						</Animated.div>
						<Animated.div id="neptune" className="orbit" keyframes={getkeyframes('neptune')} timing={getTiming('neptune')}>
							<Animated.div className="pos" keyframes={options.invert.keyframes} timing={getTiming('neptune')}>
								<Animated.div className="planet" keyframes={getshadowkeyframes('neptune')} timing={getTiming('neptune')}>
									<dl className="infos">
										<dt>Neptune</dt>
										<dd>
											<span></span>
										</dd>
									</dl>
								</Animated.div>
							</Animated.div>
						</Animated.div>
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