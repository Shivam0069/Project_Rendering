import EventList from "../components/events/event-list";
import { useEffect, useState } from "react";
import { getFeaturedEvents } from "../helper/api-util";

function HomePage(props) {
  // const [featuredEvents, setFeaturedEvents] = useState(props.featuredEvents);
  // useEffect(() => {
  //   fetch(
  //     "https://nextjs-project-93525-default-rtdb.firebaseio.com/events.json"
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const Array = [];
  //       for (const key in data) {
  //         if (data[key].isFeatured) {
  //           Array.push({
  //             id: key,
  //             title: data[key].title,
  //             description: data[key].description,
  //             date: data[key].date,
  //             location: data[key].location,
  //             image: data[key].image,
  //             isFeatured: data[key].isFeatured,
  //           });
  //         }
  //       }
  //       setFeaturedEvents(Array);
  //     })
  //     .catch((error) => {
  //       console.error("Fetch error:", error);
  //     });
  // }, []);
  // if (!featuredEvents) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <EventList items={props.featuredEvents} />
    </div>
  );
}

export default HomePage;

// export async function getStaticProps() {
//   try {
//     const response = await fetch(
//       "https://nextjs-project-93525-default-rtdb.firebaseio.com/events.json"
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();

//     const featuredEvents = [];
//     for (const key in data) {
//       if (data[key].isFeatured) {
//         featuredEvents.push({
//           id: key,
//           ...data[key],
//           // title: data[key].title,
//           // description: data[key].description,
//           // date: data[key].date,
//           // location: data[key].location,
//           // image: data[key].image,
//           // isFeatured: data[key].isFeatured,
//         });
//       }
//     }
//     return { props: { featuredEvents }, revalidate: 1 }; // will be passed to the page component as props
//   } catch (error) {
//     console.error("Error fetching data:", error);

//     // You can return an empty array or handle the error in a way that fits your application
//     return { props: { featuredEvents: [] } };
//   }
// }
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: { featuredEvents },
    revalidate: 1800,
  };
}
