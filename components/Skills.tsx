'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import * as React from "react"
import Image from "next/image"

export function Skills()
{

    const [activeTab, setActiveTab] = React.useState<String>('program');
    
    const changeActiveTab = (value: String): void =>
    {
        setActiveTab(value);
    };

    return(
        <div className="text-pearl flex-center text-center">
            <Tabs defaultValue="program" className="w-2/3 min-w-[350px]">
                <TabsList className="grid w-full grid-cols-3 bg-richBlack min-w-[350px]">
                    <TabsTrigger value="program" className={activeTab == 'program' ? 'bg-grey' : '' } onClick={() => changeActiveTab('program')}>Programming</TabsTrigger>
                    <TabsTrigger value="extrac" className={activeTab == 'extrac' ? 'bg-grey' : ''} onClick={() => changeActiveTab('extrac')}>Extra Curricular</TabsTrigger>
                    <TabsTrigger value="game" className={activeTab == 'game' ? 'bg-grey' : ''} onClick={() => changeActiveTab('game')}>Game Design</TabsTrigger>
                </TabsList>
                <TabsContent value="program">
                    <Card>
                        <CardHeader>
                            <CardTitle>Programming Languages</CardTitle>
                                <CardDescription>
                                    I am adept in making innovative software in the following Languages.
                                </CardDescription>
                        </CardHeader>
                            <CardContent className="flex-center pb-10">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[5rem] gap-y-8">
                                    <Image src='/C++.png' alt='C++ Logo' width={50} height={50}/>
                                    <Image src='/C.png' alt='C Logo' width={50} height={50}/>
                                    <Image src='/c_sharp.png' alt='C Sharp Logo' width={50} height={50}/>
                                    <Image src='/Python.png' alt='Python Logo' width={50} height={50}/>
                                    <Image src='/HTML5.png' alt='HTML5 Logo' width={50} height={50}/>
                                    <Image src='/Typescript.png' alt='TypeScript Logo' width={50} height={50}/>
                                    <Image src='/CSS3.png' alt='CSS3 Logo' width={50} height={50}/>
                                    <Image src='/Flutter.png' alt='CSS3 Logo' width={50} height={50}/>
                                </div>
                            </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="extrac">
                <Card>
                        <CardHeader>
                            <CardTitle>Extracurricular Skills</CardTitle>
                                <CardDescription>
                                    Some skills that i've gathered over the years
                                </CardDescription>
                        </CardHeader>
                            <CardContent className="flex-center pb-10">
                                <ul className="w-full text-center text-pearl">
                                    <li className="mb-4">
                                        Video Editing
                                    </li>
                                    <li className="mb-4">
                                        Content Creation
                                    </li>
                                    <li className="mb-4">
                                        Video Game Testing
                                    </li>
                                    <li className="mb-4">
                                        Languages - Hindi, English, German
                                    </li>
                                </ul>
                            </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="game">
                <Card>
                        <CardHeader>
                            <CardTitle>Game Design</CardTitle>
                                <CardDescription>
                                    Proficiency in the following game dev tools
                                </CardDescription>
                        </CardHeader>
                            <CardContent className="flex-center pb-10">
                                <ul className="w-full text-center text-pearl">
                                <li className="mb-4">
                                        OpenGL
                                    </li>
                                    <li className="mb-4">
                                        Unity
                                    </li>
                                    <li className="mb-4">
                                        Unreal Engine
                                    </li>
                                    <li className="mb-4">
                                        Godot
                                    </li>
                                </ul>
                            </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}