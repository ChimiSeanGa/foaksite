export const upcomingEventsQuery = `
  *[_type == "event" && startDate >= now()]
    | order(startDate asc) {
      _id,
      title,
      slug,
      startDate,
      endDate,
      location,
      description,
      "imageUrl": image.asset->url,
    }
`
