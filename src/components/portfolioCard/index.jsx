// This file is the card component for the portfolio page.
// Which exports the LinkedIn, GitHub and core Projects links.
// ============================================================

// Import packages
// ============================================================
import { Link as ChakraLink } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Heading, Button } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// ============================================================

// Define component
// ============================================================
const PortfolioCard = () => {
	const LinksData = [
		{
			label: 'Github',
			to: 'https://github.com/EhsanAsh',
		},
		{
			label: 'LinkedIn',
			to: 'https://www.linkedin.com/in/ehsan-ashrafipour-922056245/',
		},
		{
			label: 'AdsTrees',
			to: 'https://adstrees.com/',
		},
		{
			label: 'TravIS',
			to: 'https://travis231017-9762a24c277b.herokuapp.com/',
		},
		{
			label: 'Movie Fight',
			to: 'https://ehsanash.github.io/movie-search/',
		},
		{
			label: 'TNG',
			to: 'https://uoftgroup3.github.io/toronto-newcomers-guide/',
		},
	];

	return (
		<Card size={'sm'} variant={'links'}>
			<CardHeader>
				<Heading
					as={'h2'}
					textAlign="left"
					fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
					color={'brand.error'}
					fontFamily={'josefinSlabTitle'}
					fontWeight={'700'}
					pb={4}
					borderLeft={'3px solid'}
					borderColor={'brand.darkBlue'}
					p={2}>
					Core projects and social media
				</Heading>
			</CardHeader>
			<CardBody alignSelf={'stretch'} m={2}>
				{LinksData.map((link, index) => (
					<Button
						key={index}
						leftIcon={
							link.label === 'Github' ? (
								<FaGithub />
							) : link.label === 'LinkedIn' ? (
								<FaLinkedin />
							) : null
						}
						variant={'portfolioLinks'}>
						<ChakraLink as={'a'} href={link.to} isExternal>
							{link.label}
						</ChakraLink>
					</Button>
				))}
			</CardBody>
		</Card>
	);
};
// ============================================================

// Export component
// ============================================================
export default PortfolioCard;
// ============================================================
