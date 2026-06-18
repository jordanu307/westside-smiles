import { useEffect } from 'react'
import FadeIn from '../components/FadeIn.jsx'
import Slideshow from '../components/Slideshow.jsx'

/* header band = white, then events cycle: beige, white, tan, white */
const EVENT_BGS = [
  'var(--beige)',
  'var(--white)',
  'rgba(205, 184, 127, 0.18)',
  'var(--white)',
]

function EventMedia({ images, eventTitle }) {
  if (images.length <= 1) return <Slideshow images={images} label={eventTitle} />
  const mid = Math.ceil(images.length / 2)
  return (
    <div className="event-media-split">
      <Slideshow images={images.slice(0, mid)} label={`${eventTitle}, part 1`} />
      <Slideshow images={images.slice(mid)} label={`${eventTitle}, part 2`} />
    </div>
  )
}

const events = [
  {
    id: 'jun2026',
    date: 'June 2026',
    title: 'Dropping Off T-Shirts and Hygiene Kits at Covenant House Shelters',
    images: [
      '/images/shipping.jpg',
      '/images/shipping1.jpg',
      '/images/shipping2.jpeg',
    ],
  },
  {
    id: 'may2026',
    date: 'May 2026',
    title: 'Hygiene Kit Drive at Congregation Rodeph Sholom',
    images: [
      '/images/2hygienekitmay2026.jpg',
      '/images/2hygienekit1may2026.jpeg',
      '/images/2hygienekit2may2026.jpeg',
      '/images/2hygienekit3may2026.jpeg',
      '/images/2hygienekit4may2026.jpeg',
      '/images/2hygienekit5may2026.jpeg',
      '/images/2hygienekit6may2026.jpg',
    ],
  },
  {
    id: 'dec2025',
    date: 'December 2025',
    title: 'West Side Smiles + Winter Walk in Central Park',
    images: [
      '/images/2winterwalkdec2025.jpg',
      '/images/2winterwalk1dec2025.jpg',
      '/images/2winterwalk2dec2025.jpg',
      '/images/2winterwalk3dec2025.jpg',
      '/images/2winterwalk4dec2025.jpg',
      '/images/2winterwalk5dec2025.jpg',
    ],
  },
  {
    id: 'jan2025',
    date: 'January 2025',
    title: 'West Side Smiles x Winter Walk Workshop Fundraisers and Events at PS 87',
    images: [
      '/images/ps87jan2025.jpg',
      '/images/ps871jan2025.jpg',
      '/images/ps872jan2025.jpg',
      '/images/ps873jan2025.jpg',
    ],
  },
  {
    id: 'nov2024',
    date: 'November 2024',
    title: 'West Side Smiles x Winter Walk Workshop at MS 54',
    images: [
      '/images/Ms54nov2024.jpg',
      '/images/ms541nov2024.jpg',
      '/images/ms542nov2024.jpg',
      '/images/ms543nov2024.jpg',
      '/images/ms544nov2024.jpg',
    ],
  },
  {
    id: 'oct2024',
    date: 'October 2024',
    title: 'Sukkot Kit Packaging Event with Rodeph Sholom',
    images: [
      '/images/sukkotpackoctober2024.jpg',
      '/images/sukkotpack1october2024.jpg',
    ],
  },
  {
    id: 'may2024',
    date: 'May 2024',
    title: "Mother's Day Supply Packaging Event",
    images: [
      '/images/mothersdaypackmay2024.jpg',
      '/images/mothersdaypack1april2024.jpg',
      '/images/mothersdaypack2april2024.jpg',
      '/images/mothersdaypack3april2024.jpg',
      '/images/mothersdaypack4april2024.jpg',
      '/images/mothersdaypack5april2024.jpg',
      '/images/mothersdaypack6april2024.jpg',
    ],
  },
  {
    id: 'apr2024',
    date: 'April 2024',
    title: "Ellie's Half Marathon in Support of West Side Smiles",
    images: [
      '/images/Elliehalfmarathonapril2024.jpg',
      '/images/Elliehalfmarathon1april2024.jpg',
      '/images/Elliehalfmarathon2april2024.jpg',
    ],
  },
  {
    id: 'feb2024',
    date: 'February 2024',
    title: 'NYC Winter Walk',
    images: [
      '/images/winterwalkfeb2024.jpg',
      '/images/winterwalk1feb2024.jpg',
      '/images/winterwalk2feb2024.jpg',
    ],
  },
  {
    id: 'dec2023',
    date: 'December 2023',
    title: 'West Side Smiles x Covenant House New York 2nd Annual Holiday Gift Drive',
    images: [
      '/images/2giftdriveheaderdec2023.jpg',
      '/images/2giftdrivedec2023.jpg',
      '/images/2giftdrive1dec2023.jpg',
      '/images/2giftdrive2dec2023.jpg',
    ],
  },
  {
    id: 'sep2023',
    date: 'September 2023',
    title: 'Dignity Kit Making with Rodeph Sholom',
    images: [
      '/images/dignitykitsep2023.jpg',
      '/images/dignitykit1sep2023.jpg',
      '/images/dignitykit2sep2023.jpg',
    ],
  },
  {
    id: 'jun2023',
    date: 'June 2023',
    title: 'Hygiene Supply Kit Packaging',
    images: [
      '/images/hygienekitjune2023.jpg',
      '/images/hygienekit1june2023.jpg',
      '/images/hygienekit2june2023.jpg',
    ],
  },
  {
    id: 'apr2023',
    date: 'April 2023',
    title: 'Bake Sale in Support of West Side Campaign Against Hunger',
    images: [
      '/images/2bakesaleapril2023.jpg',
      '/images/2bakesale1april2023.jpg',
      '/images/2bakesale3april2023.jpg',
    ],
  },
  {
    id: 'dec2022',
    date: 'December 2022',
    title: 'West Side Smiles x Covenant House NY Holiday Gift Drive and Gift Packaging',
    images: [
      '/images/giftdriveheaderdec2022.jpg',
      '/images/giftdrivedec2022.jpg',
      '/images/giftdrive1dec2022.jpg',
      '/images/giftdrive2dec2022.jpg',
    ],
  },
  {
    id: 'jun2022',
    date: 'June 2022',
    title: 'Our First Bake Sale',
    images: [
      '/images/bakesalejune2022.jpg',
      '/images/bakesale1june2022.jpg',
      '/images/bakesale2june2022.jpg',
      '/images/bakesale3june2022.jpg',
    ],
  },
  {
    id: 'feb2022',
    date: 'February 2022',
    title: 'Donating Supplies to the Bowery Mission',
    images: [
      '/images/boweryfeb2022.jpg',
      '/images/bowery1feb2022.jpg',
    ],
  },
  {
    id: 'dec2021',
    date: 'December 2021',
    title: 'Winter-Themed Cookie Decorating Fundraiser',
    images: [
      '/images/cookiesdec2021.jpg',
      '/images/cookies1dec2021.jpg',
      '/images/cookies2dec2021.jpg',
      '/images/cookies3dec2021.jpg',
    ],
  },
]

function Events() {
  useEffect(() => { document.title = 'Events | West Side Smiles' }, [])
  return (
    <>
      {/* Header band, full-bleed white */}
      <div className="events-header-band">
        <div className="container">
          <FadeIn className="events-header-inner">
            <div className="eyebrow eyebrow-blue">Events</div>
            <h1>Gallery</h1>
            <p>Every event, every drive, every smile.</p>
          </FadeIn>
        </div>
      </div>

      <div className="timeline-gallery">
        {events.map((event, i) => {
          const isTextLeft = i % 2 === 0
          return (
            <div
              key={event.id}
              className="timeline-band"
              style={{ background: EVENT_BGS[i % 4] }}
            >
              <div className="container">
                <FadeIn
                  className={`timeline-event ${isTextLeft ? 'layout-text-left' : 'layout-text-right'}`}
                >
                  <div className="timeline-text">
                    <div className={`timeline-date ${i % 2 === 0 ? 'eyebrow-blue' : 'eyebrow-navy'}`}>
                      {event.date}
                    </div>
                    <h2 className="timeline-title">{event.title}</h2>
                  </div>
                  <div className="timeline-media">
                    <EventMedia images={event.images} eventTitle={event.title} />
                  </div>
                </FadeIn>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Events
