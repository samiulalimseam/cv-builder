import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    Image,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import { MdWorkspacePremium } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import images from "../assets/img/index";
import "./swiperStyle.css";

const templates = [
  { id: 1,
    name: "Template 1",
    type: "Premium",
    activated: true,
  },
  { id: 2,
    name: "Template 2",
    type: "Free",
    activated: false,
  },
  { id: 3,
    name: "Template 3",
    type: "Premium",
    activated: false,
  },
  { id: 4,
    name: "Template 4",
    type: "Free",
    activated: false,
  },
  { id: 5,
    name: "Template 5",
    type: "Premium",
    activated: false,
  },
  { id: 6,
    name: "Template 6",
    type: "Free",
    activated: false,
  },
];
export default function Create() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navPrevref = useRef(null);
  const navNextref = useRef(null);
  const navigate = useNavigate()

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <>
      <Swiper
        centeredSlides={true} // Center the active slide
        slidesPerView="auto" // Adjust slides based on content and container width
        spaceBetween={30} // Maintain spacing between slides
        onSlideChange={handleSlideChange} // Track active slide index
        className="mySwiper"
        pagination={{ enabled: true, clickable: true }}
        navigation={{ prevEl: navPrevref.current, nextEl: navNextref.current }}
        modules={[Navigation]}
      >
        {templates.map((template, index) => (
          <SwiperSlide
            onClick={() => setActiveIndex(index)}
            key={index}
            style={{
              width: "300px",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border:
                index === activeIndex ? "2px solid #4c7cf7" : "2px solid gray",
              borderRadius: "10px",
              transition: "width 0.5s ease-in-out",
              cursor: "pointer",
            }}
          >
            <Flex
              width={"297px"}
              m={"auto"}
              position={"relative"}
              height={"450px"}
            >
              <Image objectFit={"contain"} src={images[index]} />
              <Flex
                position={"absolute"}
                top={0}
                right={0}
                justifyContent={"end"}
              >
                <Box
                  color={"white"}
                  padding={"5px 15px"}
                  m={2}
                  borderRadius={"md"}
                  fontSize={"sm"}
                  fontWeight={"medium"}
                  width={"max-content"}
                  bgColor={"#696969bd"}
                >
                  {template.type}
                </Box>
              </Flex>
              {index === activeIndex && (
                <Box
                  position={"absolute"}
                  bottom={0}
                  left={"50%"}
                  width={"100%"}
                  transform={"translateX(-50%)"}
                >
                  {template?.activated ? (
                    <Button
                      backgroundColor={"#4c7cf7"}
                      width={"90%"}
                      boxShadow={"lg"}
                      colorScheme="blue"
                      onClick={() => navigate(`/design/${template.id}`)}
                    >
                      Select
                    </Button>
                  ) : (
                    <Button
                     gap={2}
                      width={"90%"}
                      boxShadow={"lg"}
                      colorScheme="yellow"
                    >
                        <MdWorkspacePremium />
                      Get Premium
                    </Button>
                  )}
                </Box>
              )}
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
      <HStack m={2} justifyContent={"center"}>
        <ButtonGroup isAttached>
          <Button ref={navPrevref}>
            <FcPrevious />
          </Button>
          <Button ref={navNextref}>
            <FcNext />
          </Button>
        </ButtonGroup>
      </HStack>
    </>
  );
}
