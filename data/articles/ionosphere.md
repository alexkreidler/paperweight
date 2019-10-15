In this paper we provide basic background information about the ionosphere, a few core processes by which it is created, how it is influenced by other parts of the atmosphere, and how scientists measure it using modern technology.


# Atmospheric Terminology

Sections of the atmosphere are distinguished by some property (temperature, chemical composition, or physical processes) in a range of altitude above Earth, and end with "-sphere." Correspondingly, the upper bound of each section is named "-pause."

An atmospheric *profile* is a distribution of a certain property with respect to altitude.

# Introduction

The ionosphere is a section of partially ionized gases in the atmosphere, generally ranging between 50-300km above earth. The study of the ionosphere is critical for developing radio and telecommunication systems, due to its unique properties which provide a range of radio propagation modes in use by almost every communication system you interact with on a daily basis.

## Regions of the ionosphere
The general regions of the ionosphere can be seen in Figure n, but specifically, they are:
- D region - between 50 and 90km
- E region - 90 to 140 km
- F1 region - 140 to 210 km
- F2 region - over 210 km


## Ionization Basics
Ionization is a process where negatively charged electrons leave neutral atoms or molecules leaving positively charged particles (cations) and free electrons. They can also join existing neutral molecules to create negatively charged particles (anions). An example can be seen in Figure 

These free electrons are relevant for HF radio propagation and electron density in a given part of the ionosphere determines which frequencies are reflected and how they are disturbed.

## Ionization in the Ionosphere
In the ionosphere, the primary cause of ionization is solar radiation. This has several effects, for example that the ionosphere changes significantly at night. During the day, all 4 regions are generally active. At night however, only the E and F layers are active


## Influences on the Ionosphere
Earth's (electro)-magnetic field has a unique impact on the atmosphere. The study of these effects is contained in the magenetosphere which has significant impact on the free electrons in the ionosphere. It is known that the orientation in magnetic field determines the direction of ionization, resulting in different ionospheric conditions at the equator, where Earth's magnetic field is parallel, and near the poles, where the magnetic field is at a significant angle. Additionally, the composition of the Earth atmosphere (Fig ) plays a unique role, because different sets of atoms and molecules have different reactions to carry out the ionospheric processes, particularly recombination. See 
 
## Study of the Ionosphere
The study of the ionosphere is difficult due to the many physical phenomena in play which influence it. Over time,  it has evolved from understanding the basics processes of the ionosphere and upper atmosphere (aeronomy) to the understanding the ionosphere in terms of plasma physics, fluid dynamics, and electrodynamics. In this paper, we will provide a surface-level overview of basic ionospheric processes using a more traditional approach.

# Ionospheric Processes

In general ionospheric processes can be divided into the production and destruction of ionization (photochemical) and the movement of ionization (transport).

In general $P = L$, where $P$ is the ionization production rate and $L$ is the chemical loss rate to due recombination.

## Photoionization
The principle source of photoionization is generally solar extreme ultraviolent (EUV) and X-Ray radiation (photons with energy $> 12 eV$).

In general, this process can be described using the Chapman Function, usually notated as $q(\chi, z)$, which gives the rate of production of ionization:

$$P(z) = P_0 \exp(1 - z - e^{-z} \sec(\chi))$$

given altitude/reduced height ($z$), solar zenith angle ($\chi$), and ion recombination rate at $\chi = 0$ and $h = h_0$ ($P_0$). A graph of the Chapman Function can be found in Figure 3.

This function can derived from a base case of a single gas with monochromatic (uniform) radiation, and then is integrated up the atmospheric column and extended to remove the initial assumptions. It is then extended for the multiple gases that make up the composition of the atmosphere.

There are other sources of photoionization, but they are more complex and would be difficult to cover here.

## Recombination
Solar radiation creates free electrons when it collides with neutral particles. When free electrons collide with charged ions, they form neutral particles. Recombination is known as the limiting factor of the ionosphere and is what prevents it from becoming fully ionized or a complete plasma.

There are two general types of recombination: ion-ion and electron-ion. These are also known as dissociative and radiative recombination reactions, respectively. Ion-ion occurs most frequently, as its reaction rate is many times that of electron ion, due to the fact that it does not need to emit energy in the form of a photon/radiation.

These are of the general forms:

There are other types of electron-ion recombination, but the   mechanism shown above is most common across all regions of the ionosphere.

The specific recombination reactions are unique to each region of the ionosphere, as the concentration of different types of ions varies with altitude as shown in Figure 

### Example 1 The nitrosonium (NO+) and free electron recombination reaction shown below (a dissociative reaction) occurs 1000 times more often than the oxygen and free electron radiative recombination reaction.

This specific reaction only occurs in the F region.

# Applications of the Ionosphere

An understanding of the ionosphere is critically important for developing radio, telecommunications, and satellite systems. 

The different regions of the ionosphere can be used to design what are known as "sky-wave" communication systems, by which a radio signal reflects off of the ionosphere and back down again. Because the ionosphere reflects HF signals at different frequencies, there only are certain maximum frequencies supported by each ionospheric region. This is known as the MUF or maximum usable frequency. There are also best and worst estimates which provide a 10%, 50% and 90% of success for transmission.

Another factor to consider when designing a HF communication system is the hop length, or the maximum direct earth distance covered by one ionospheric reflection (or hop). In general, this is 1800 km for the E region and 3200 km for the F region. Systems can be designed with multiple hops but this results in additional complexity.

# Ionospheric Measurements and Modeling

The primary instrument for measuring the ionosphere is the ionosonde, which is a HF radio signal of increasing frequency over time emitted by a transmitter which allows the receiver to record the difference between the emitted and recorded signals allowing scientists to study the impact of the ionosphere on different radio frequencies. 

In fact, the ionosphere was first discovered by noticing anomalies in radio transmissions across the Atlantic, in the first ever trans-Atlantic radio transmission by Marconi.

Today, we have more tools at our disposal than ever, including:

- oblique ionosondes, where the transmitter and receiver are separated by some distance. 
- space-based measurements of ion composition and electron density
- accurate models and measurements of Earth's magnetic fields
- systems detection of solar flares and other anomalies which create ionospheric disturbances


# Conclusion
In conclusion, the ionosphere is important in many systems, but our understanding of it is still incomplete. Although we've made much progress since its discovery and the early ionospheric models, it is one of the most complex natural systems with a huge impact on our everyday lives, even if it is not obvious to us.