---
Modified: 2026-01-21T12:59:38-06:00
Created: 2026-01-18T21:46:38-06:00
public: true
---

> [!definition] 
> Radiation is defined as the emission of energy via waves or particles through a medium. So if you don't specify a specific kind it's potentially ambiguous.

## Units

|Quantity|SI Unit|Traditional Unit|Conversion|
|---|---|---|---|
|Activity|Becquerel (Bq)|Curie (Ci)|1 Ci = 37 GBq|
|Absorbed Dose|Gray (Gy)|rad|1 Gy = 100 rad|
|Equivalent Dose|Sievert (Sv)|rem|1 Sv = 100 rem|
|Exposure|C/kg|Roentgen (R)|1 R ≈ 0.01 Gy|
**Activity** is the amount of radioactivity in the stuff, decays per second. 
**Absorbed Dose** is energy deposited in tissue, regardless of type
**Equivalent Dose** is energy deposited in tissue, adjust for damage based on type ($\alpha, \beta, \gamma$) 

# Particle
- **Alpha Radiation** 
	- 3 - 7 MeV, very slow
	- Carried via alpha particle, which is just an He-4 nucleus (No electrons so it's positive)
	- More typical in heavier elements like transuranics
	- Shielded with very little effort, couple cm of air or human skin is usually enough. 
	- Am241
- **Beta Decay**
	- ~2 MeV, very fast
	- Carried via beta particle, which is either an electron **or** positron. 
	- Produced through either:
		1. $Neutron → Proton + Electron + Antineutrino$ 
		2.  $Proton → Neutron + Positron + Neutrino$ 
	- 'Easy' to shield with plastic or Al, but that generates **brehmsstrahlung** (braking radiation) which are roughly X-ray frequencies 
	- Sr90

> [!atom]- Decay Equation
> $$ N = N_0 e^{-\lambda t}\;\;\;and\;\;\; \lambda = \frac{0.693}{T_{half}} \;\;\;where...$$
> - N is number of Nuclei, t is time
> - $\lambda$ is decay constant
> - $T_{half}$ is half life

# Electromagnetic
![[Pasted image 20260118235553.png]]

- **Gamma**
	- 10 KeV to 10 MeV
	- 3rd primary type of radioactive emission from element
	- Come from excited nuclei, hence often produced after other particle radiation
	- Strongly ionizing and therefore harmful. Technically indirectly ionizing...

> [!question]- Why doesn't penetration power correlate with wavelength?
> It does. It's just more complicated. 
>  
> In order to 'penetrate', the photons (minimum quanta of energy the wave can exchange) have to be close to transitions with the matter in question. The very long and very short waves don't interact much with the matter in the middle because their photons are low or too high energy, respectively. 
> ![[Pasted image 20260118234948.png]]
# Acoustic

# Gravitational

