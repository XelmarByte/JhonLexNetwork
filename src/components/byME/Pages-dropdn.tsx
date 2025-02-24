

import { createListCollection } from "@chakra-ui/react"
import {
  SelectContent,
  SelectItem,
  
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select"

const Demodropdow = () => {
  return (
    <SelectRoot collection={frameworks} size="sm" width="8rem">
      
      <SelectTrigger>
        <SelectValueText placeholder="Pages" />
      </SelectTrigger>
      <SelectContent className="100%">
        {frameworks.items.map((movie) => (
          <SelectItem item={movie} key={movie.value}>
            {movie.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "Albums", value: "albums" },
    { label: "Celebration", value: "celebration" },
    { label: "Messaging", value: "messaging" },
    { label: "Profile", value: "profile" },
    { label: "Events", value: "events" },
    { label: "Event Details", value: "events-detail" },
    { label: "Groups", value: "groups" },
    { label: "Group details", value: "groups-detail" },
    { label: "Post Videos", value: "postvideos" },
    { label: "Post Videos Details", value: "postvideos-details" },
    { label: "Blog", value: "blog" },
    { label: "Blog Details", value: "blog-details" },
   
  ],
})

export default Demodropdow;