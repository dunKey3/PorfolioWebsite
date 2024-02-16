'use client'

import * as React from "react"
import { textArray, cardArray } from "./ProjectDetails";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi
} from "@/components/ui/carousel"
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export function Projects() {

  const [index, setIndex] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {api?.on("select", () => setIndex(api.selectedScrollSnap()))}, [api])

  return (
    <div className="flex-center xl:flex-start flex-col gap-y-[4rem] xl:flex-row xl:gap-x-[5rem]">
      <Carousel setApi={setApi} className="w-full max-w-lg md:max-w-xl">
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
              <Card className="flex-start flex-col gap-y-10 text-pearl text-left p-1 mix-blend-darken">
                <CardContent>
                  <CardHeader>
                    <CardTitle>{cardArray[index].title}</CardTitle>
                    <CardDescription>{cardArray[index].description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                  <ReactPlayer
                      className='react-player'
                      controls={true}
                      url='https://youtu.be/9VAIFBs8qDY?si=jwZ_CbJNtzYmHYTx'
                      width='400px'
                      height='250px'
                    />
                  </CardContent>
                  <CardFooter>
                    <p>{cardArray[index].footer}</p>
                  </CardFooter>
                </CardContent>
              </Card>
          </CarouselItem>
          ))}
        </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      </Carousel>

      <div className="flex-start flex-col gap-y-[4rem] text-pearl text-left xl:mt-10">
        <h1 className="heading3">{cardArray[index].title}</h1>
        <p className="heading4 mr-10">{textArray[index]}</p>
      </div>
    </div>
  )
}
