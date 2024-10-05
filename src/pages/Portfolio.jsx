// This file is for the Portfolio page. It is a simple page
//  that displays a short description of the website and the developer.
// ============================================================

// Importing packages and components
// ============================================================
import { Flex, Box, Container, Heading, Text, Button } from '@chakra-ui/react';
import SkillList from '../components/skillList';
import PortfolioCard from '../components/portfolioCard';
// ============================================================

// Functional component
// ============================================================
const Portfolio = () => {
	const handleClick = () => {
		const publicUrl = `${window.location.protocol}//${window.location.host}`;
		window.open(`${publicUrl}/EHSAN-ASH-Resume.pdf`);
	};

	return (
		<Flex
			flexDirection={{ base: 'column', lg: 'row' }}
			justifyContent={'space-between'}
			alignItems={'center'}
			alignSelf={'center'}
			px={7}
			my={20}
			pb={10}
			flex={'1 0'}
			w={'100%'}
			gap={0}>
			<Box
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}
				gap={'0'}
				alignSelf={'center'}
				width={'100%'}
				height={'auto'}>
				<Container variant={'portfolio'} m={0} size={'lg'}>
					<Heading
						as={'h1'}
						fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl: '5xl' }}
						fontWeight={'700'}
						color={'brand.error'}
						textAlign={'center'}
						mb={0}
						pl={4}
						fontFamily={'josefinSlabTitle'}
						borderLeft={'3px solid'}
						borderColor={'brand.darkBlue'}>
						Summary
					</Heading>
					<Text p={4}>
						An innovative and passionate Full-Stack Developer, recently
						graduated from the University of Toronto with a remarkable
						graduation score of 96.07 (A). I bring a rich and diverse
						background, combining over 10 years of experience in sales and
						marketing in the home and kitchen appliance sector, along with a
						recent but intensive journey into full-stack development. Known for
						an indescribable enthusiasm for coding, I am a self-proclaimed hard
						worker, fast learner, goal-oriented, and a collaborative team
						member. My career is punctuated by a childhood dream to become a
						programmer and application developer, a dream that I have pursued
						with relentless dedication. I thrive in environments that require
						creativity and problem-solving, always eager to develop innovative
						solutions that positively impact people&apos;s lives and the
						environment. My technical proficiency spans across various languages
						and frameworks, with a particular comfort in MERN stack technologies
						and a propensity for writing logical codes over styling and
						designing.
					</Text>
					<Box alignSelf={'center'} m={2}>
						<Button onClick={handleClick} variant={'portfolio'}>
							Download Ehsan&apos;s Resume
						</Button>
					</Box>
				</Container>
			</Box>
			<Box
				display={'flex'}
				flexDirection={'column'}
				alignItems={'center'}
				alignSelf={'center'}
				justifyContent={'center'}
				width={'100%'}
				height={'auto'}
				ml={{ base: 0, lg: 10 }}
				my={{ base: 10, lg: 0 }}
				gap={'10'}>
				<Box>
					<SkillList />
				</Box>
				<Box>
					<PortfolioCard />
				</Box>
			</Box>
		</Flex>
	);
};
// ============================================================

// Exporting the functional component
// ============================================================
export default Portfolio;
// ============================================================
