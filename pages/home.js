import Banner from '@/components/Banner/Banner';
import BestWorkout from '@/components/BestWorkout/BestWorkout';
import DailyMorningWorkout from '@/components/DailyMorningWorkout/DailyMorningWorkout';
import FitnessChallenge from '@/components/FitnessChallenge/FitnessChallenge';
import HealthyAndFresh from '@/components/HealthyAndFresh/HealthyAndFresh';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Testimonials from '@/components/Testimonials/Testimonials';
import WorkOutPrograms from '@/components/WorkOutPrograms/WorkOutPrograms';
import React from 'react';

const Test = () => {
    return (
        <div >
            <Banner></Banner>
            <HealthyAndFresh></HealthyAndFresh>
            <FitnessChallenge></FitnessChallenge>
            <BestWorkout></BestWorkout>
            <DailyMorningWorkout></DailyMorningWorkout>
            <HowItWorks></HowItWorks>
            <WorkOutPrograms></WorkOutPrograms>
            <Testimonials></Testimonials>
        </div>
    );
}

export default Test;