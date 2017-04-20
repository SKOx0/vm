import { Component, ElementRef, AfterViewInit } from '@angular/core';
var Particles = require('particlesjs');

@Component({ selector: 'vm-particle', template: require('./particle.html')})
export class ParticleComponent implements AfterViewInit {
	ngAfterViewInit(){
		this.initParticles();
	}

	private initParticles() : void{
		Particles.init({
			selector: '.background',
			maxParticles: 450,
			color: '#ffffff',
			responsive: [
			{
				breakpoint: 768,
				options: {
					maxParticles: 200,
					//color: '#48F2E3',
					color: '#48F2E3',
					connectParticles: false
				}
			}, {
				breakpoint: 425,
				options: {
					maxParticles: 100,
					connectParticles: true
				}
			}, {
				breakpoint: 320,
				options: {
					maxParticles: 0
				}
			}
			]
		});
	}
}
