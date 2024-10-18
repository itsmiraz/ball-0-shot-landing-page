import restaurant from "../assets/images/projectoccassion/restuarant.png";
import marathon from "../assets/images/projectoccassion/marathon.png";
import ski from "../assets/images/projectoccassion/ski-resort.png";
import festival from "../assets/images/projectoccassion/festival.png";
import sports from "../assets/images/projectoccassion/sports.png";

// import award1 from "../assets/images/awards/award-1.png";
// import award2 from "../assets/images/awards/award-2.png";
// import award3 from "../assets/images/awards/award-3.png";

import orderOfChemistsQuebecAward  from '../assets/images/awards/ORDER OR CHEMIST.webp'
import quebecBiologistAssociationAward  from '../assets/images/awards/QUEBEC BIOLOGIST.webp'
import forcesAvenirMedal  from '../assets/images/awards/FORCES AVENIR.webp'
import defi48RegionalWinner  from '../assets/images/awards/DEFI48.webp'
import defi48FavouriteTeamWinner  from '../assets/images/awards/DEFI48.webp'
import oseEntreprendreWinner  from '../assets/images/awards/OSE ENTREPRENDRE.webp'
import superExpoScienceProvincialFinale  from '../assets/images/awards/SUPER EXPO-SCIENCE PROVINCIAL.webp'


import OnsiteIcon from "../assets/icons/onSiteLogo.svg";
import PartnerShipIcon from "../assets/icons/partnerShip.svg";
import Opportunities from "../assets/icons/oppurtunitites.svg";
import SMOnsiteIcon from "../assets/icons/smOnsiteLogo.svg";
import SMPartnerShipIcon from "../assets/icons/smPartnerShip.svg";
import SMOpportunities from "../assets/icons/smOpputuniites.svg";

// import partyEvent from "../assets/images/party-event.webp";
// import croudFunding from "../assets/images/croud-funding.webp";
// import charityEvent from "../assets/images/charity-event.webp";

import bougeBougeVerdun from "../assets/images/gallery/10-09-2023-Bouge-Bouge-Verdun.webp"
import bougeBougeGatineau from "../assets/images/gallery/14-05-2023-Bouge-Bouge-Gatineau.webp"
import nightOutHalloween2 from "../assets/images/gallery/28-10-2023-NightOut-Halloween.2.webp"
import bougeBougeFestivalIlePerrot from "../assets/images/gallery/6-05-2023-Bouge-Bouge-Festival-Ile-Perrot.webp"
import bougeBougeUOttawa from "../assets/images/gallery/24-09-2023-BougeBouge-uOttawa.webp"
import nightOutHalloween from "../assets/images/gallery/28-10-2023-NightOut-Halloween.webp"
import touskiVilleDeGatineau from "../assets/images/gallery/19-05-2023-Touski-Ville de Gatineau.webp"
 

export const AwardContent = [
  {
    img: orderOfChemistsQuebecAward, // Replace with actual image name
    title: "2023 ORDER OF CHEMISTS OF QUEBEC AWARD",
    desc: "Fondé en 1926, l’Ordre des chimistes du Québec (Ordre) est l’ordre professionnel qui encadre l’exercice de la chimie, au Québec.",
    date: "31/03/2023",
  },
  {
    img: quebecBiologistAssociationAward, // Replace with actual image name
    title: "2023 QUEBEC BIOLOGIST ASSOCIATION AWARD",
    desc: "L’Association des biologistes du Québec (ABQ) regroupe des membres appartenant au vaste champ des sciences biologiques.",
    date: "25/04/2023",
  },
  {
    img: forcesAvenirMedal, // Replace with actual image name
    title: "FORCES AVENIR BRONZE, SILVER AND GOLD MEDAL",
    desc: "Forces AVENIR vise à promouvoir l'engagement étudiant dans des projets qui contribuent à la formation de citoyens conscients.",
    date: "12/07/2023 - 28/09/2023",
  },
  {
    img: defi48RegionalWinner, // Replace with actual image name
    title: "DÉFI48 REGIONAL WINNER",
    desc: "Le Défi48, c’est la compétition entrepreneuriale par excellence pour développer sa fibre d'entrepreneur.e dans le feu de l’action.",
    date: "08/04/2023",
  },
  {
    img: defi48FavouriteTeamWinner, // Replace with actual image name
    title: "DÉFI48 FAVOURITE TEAM WINNER",
    desc: "Le Défi48, c’est la compétition entrepreneuriale par excellence pour développer sa fibre d'entrepreneur.e dans le feu de l’action.",
    date: "05/09/2023",
  },
  {
    img: oseEntreprendreWinner, // Replace with actual image name
    title: "OSE ENTREPRENDRE LOCAL & REGIONAL WINNER",
    desc: "OSEntreprendre a pour mission d’inspirer le désir d’entreprendre pour contribuer à bâtir un Québec fier, innovant, engagé et prospère.",
    date: "14/02/2023",
  },
  {
    img: superExpoScienceProvincialFinale, // Replace with actual image name
    title: "SUPER EXPO-SCIENCE PROVINCIAL FINALEE",
    desc: "The Super Expo-sciences, the Quebec final, brings together the best projects in Quebec, from the 12 regional finals.",
    date: "27/04/2023",
  }
];

export const OccasionContent = [
  {
    img: restaurant,
    title: "Restauration & Bar",
    description:
      "Could be used to replace single-use packets and plating amazing dishes.",
  },
  {
    img: marathon,
    title: "Marathon & Race",
    description:
      "A quick and easy way to refresh and re-energize. As a consequence, it reduces leftover pollution along with the hours of work needed to clean it.",
  },
  {
    img: ski,
    title: "Ski Resorts",
    description:
      "Situated on the top of the mountains, a Ball-O-Shot would be more than a good idea for enjoyers to take a quick shot of their favorite energy drink.",
  },
  {
    img: festival,
    title: "Festival & Events",
    description:
      "The Ball-O-Shot being biodegradable would reduce the amount of waste left on site during these events and the workforce needed to collect them.",
  },
  {
    img: sports,
    title: "Sports",
    description:
      "We aim to transfer our recipe to the field of sports to make it easy to consume fluids during the most important moments.",
  },
];

export const AboutExpertise = [
  {
    icon: <OnsiteIcon />,
    smicon: <SMOnsiteIcon />,
    title: "On-Site Presence",
    description:
      "Bring the excitement of Ball-O-Shot to your event and impress your guests with a unique beverage experience.",
  },
  {
    icon: <PartnerShipIcon />,
    smicon: <SMPartnerShipIcon />,
  
    title: "Long Term Partnership",
    description:
      "Looking to offer Ball-O-Shot permanently at your venue? We can make that happen.",
  },
  {
    icon: <Opportunities />,
    smicon: <SMOpportunities />,
  
    title: "Sponsor Opportunities",
    description:
      "Partner with us for sponsorship opportunities that elevate your event and deliver unforgettable experiences.",
  },
];

export const GalleryContent = [
  {
    image: bougeBougeVerdun,
    title: "Bouge-Bouge Verdun",
    date: "10 September 2023",
  },
  {
    image: bougeBougeGatineau,
    title: "Bouge-Bouge Gatineau",
    date: "14 May 2023",
  },
  {
    image: nightOutHalloween2,
    title: "NightOut Halloween.2",
    date: "28 October 2023",
  },
  {
    image: bougeBougeFestivalIlePerrot,
    title: "Bouge-Bouge Festival Ile-Perrot",
    date: "6 May 2023",
  },
  {
    image: bougeBougeUOttawa,
    title: "Bouge-Bouge uOttawa",
    date: "24 September 2023",
  },
  {
    image: nightOutHalloween,
    title: "NightOut Halloween",
    date: "28 October 2023",
  },
  {
    image: touskiVilleDeGatineau,
    title: "Touski Ville de Gatineau",
    date: "19 May 2023",
  },
];


export const TestimonialsData = [
  {
    name: "Timothé S.",
    badge: "Event Organizer",
    review:
      "Product is just as advertised. Very good flavour options as well 👍 It's a great way to boost any event to the next level as its innovative, delicious and eye-catching.",
    rating: 5, // You can add ratings based on the same scale, assuming 5 is the highest
  },
  {
    name: "Adam C.",
    badge: "Marathon Runner",
    review:
      "Great event! A new innovative way to get hydrated that is green!",
    rating: 5,
  },
  {
    name: "Joshua B.",
    badge: "Festival Goer",
    review: "I tried it at a festival, excellent product.",
    rating: 4, // Example: You can give a rating here if needed
  },
  {
    name: "Soumik D.",
    badge: "Fitness Enthusiast",
    review:
      "Ball-O-Shot is a game-changer! It’s a super convenient, eco-friendly beverage shot encased in a biodegradable ball. Highly recommend for anyone looking for something unique and practical!",
    rating: 5,
  },
];
