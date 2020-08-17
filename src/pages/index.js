import React from "react";
import theme from "theme";
import { Theme, Box, Link, Text, Span, Hr, Strong, List, Button } from "@quarkly/widgets";
import { Override, StackItem, Menu, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Section height="100vh" background="url(https://ukit.group/img/bg_pattern.png) center center no-repeat, linear-gradient(to top, #384dc2, #576dfd)" padding="24px 0 24px 0">
			<Override slot="SectionContent" width="100%" margin="0px 10px 0px 20px" max-width="auto" />
			<Stack width="100%">
				{"    "}
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Box background="url(https://ukit.group/img/eng.svg) center center/cover no-repeat" width="24px" height="12px" margin="4px 10px 0px 0px" />
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
						<Link
							href="https://ukit.group/en"
							color="#ffffff"
							text-decoration-line="underline"
							font="300 14px/30px --fontFamily-googleRoboto"
							margin="0px 0px 0px 0px"
						>
							English
						</Link>
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" align-items="flex-end" justify-content="flex-end">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-end" justify-content="center" />
					<Menu display="flex">
						<Override slot="item-404" display="none" />
						<Override slot="item-index" display="none" />
						<Override slot="item" font="20px --fontFamily-googleRoboto" color="#ffffff" margin="0px 0px 0px 50px" />
						<Override slot="link" text-decoration-line="initial" color="#ffffff" hover-opacity="0.5" />
					</Menu>
					{"        "}{"    "}
				</StackItem>
			</Stack>
			<StackItem
				display="flex"
				align-items="center"
				justify-content="center"
				flex-direction="column"
				height="100%"
			>
				<Override
					slot="StackItemContent"
					width="100%"
					flex-direction="column"
					align-items="center"
					justify-content="center"
				/>
				<Text
					color="#ffffff"
					font="700 80px --fontFamily-googleRoboto"
					padding="0px 0px 0 0px"
					margin="-20px 0px 10px 0px"
					as="h1"
				>
					uKit Group
					<br />
					{"\n\n"}
				</Text>
				<Text font="100 20px --fontFamily-googleRoboto" color="#bcd0ff" margin="16px 0px 24px 0px">
					est. 2005
					<br />
					{"\n\n"}
				</Text>
				<Text font="400 25px/1.4em --fontFamily-googleRoboto" color="#ffffff" margin="16px 0px 77px 0px" text-align="center">
					Помогаем людям и компаниям быть заметными в сети:
					<br />
					от сайта-визитки до гипермаркета.{"\n\n"}
				</Text>
				<Stack width="100%" align-items="center" justify-content="center">
					{"    "}
					<StackItem width="100%" display="flex">
						<Override
							slot="StackItemContent"
							align-items="center"
							justify-content="center"
							height="158px"
							margin="30p 0px 0px 0px"
						/>
						{"        "}
						<Box
							display="flex"
							flex-direction="column"
							padding="6px 45px 0px"
							align-items="flex-start"
							margin="-23px 0px 0px 0px"
						>
							<Text
								font="normal 700 33px/1.5 --fontFamily-googleRoboto"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="#ffe382"
								as="h3"
							>
								<Span font="800 55px/49.5px Roboto, sans-serif">
									14
								</Span>
								{" "}лет
							</Text>
							<Text font="normal 400 16px/1.5 --fontFamily-googleRoboto" margin="0px 0px 0px 0px" display="inline-block" color="#bcd0ff">
								на рынке SaaS-конструкторов сайтов
								<br />
								в России, СНГ и мире
								<br />
								{"\n\n"}
							</Text>
						</Box>
						<Hr
							width="0px"
							opacity="0.1"
							border-width="0px 0px 0px 4px"
							border-color="#fff"
							height="100%"
							margin="16px 0px 16px 0px"
						/>
						<Box
							display="flex"
							flex-direction="column"
							padding="6px 45px 0px"
							align-items="flex-start"
							justify-content="flex-start"
						>
							<Text
								font="normal 700 33px/1.5 --fontFamily-googleRoboto"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="#ffe382"
								as="h3"
							>
								<Span
									font="800 55px/49.5px Roboto, sans-serif"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									20
								</Span>
								{" "}продуктов
							</Text>
							<Text font="normal 400 16px/1.5 --fontFamily-googleRoboto" margin="0px 0px 0px 0px" display="inline-block" color="#bcd0ff">
								и экосистема для тех, кто создает{" "}
								<br />
								и развивает сайты профессионально{" "}
								<br />
								и своими силами
								<br />
								{"\n\n"}
							</Text>
						</Box>
						<Hr
							width="0px"
							opacity="0.1"
							border-width="0px 0px 0px 4px"
							border-color="#fff"
							height="100%"
							margin="16px 0px 16px 0px"
						/>
						<Box display="flex" flex-direction="column" padding="6px 45px 0px" margin="-23px 0px 0px 0px">
							<Text
								font="normal 700 33px/1.5 --fontFamily-googleRoboto"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="#ffe382"
								as="h3"
							>
								<Span
									font="800 55px/49.5px Roboto, sans-serif"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									3,5
								</Span>
								{" "}млн сайтов
							</Text>
							<Text font="normal 400 16px/1.5 --fontFamily-googleRoboto" margin="0px 0px 0px 0px" display="inline-block" color="#bcd0ff">
								работают сегодня на базе платформ{" "}
								<br />
								uKit, uCoz, Narod, uShop
								<br />
								{"\n\n"}
							</Text>
						</Box>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
			</StackItem>
		</Section>
		<Section>
			<StackItem>
				<Text font="normal 800 50px/1.5 --fontFamily-googleRoboto" margin="16px 0px 55px 0px" as="h2">
					Направления бизнеса
					<br />
					{"\n\n"}
				</Text>
			</StackItem>
			<Stack>
				{"    "}
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" margin="0px 0px 23px 0px" />
					{"        "}
					<Box height="160px" width="150px" background="rgba(0, 0, 0, 0) url(https://ukit.group/img/i_direct01.svg) 0% 0% /auto repeat scroll padding-box" />
					<Box margin="0px 0px 0px 50px">
						<Text font="normal 800 25px/1.2 --fontFamily-googleRoboto" margin="0px 0px 22px 0px" display="inline-block" as="h3">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Онлайн-конструкторы{" "}
								<br />
								сайтов
							</Strong>
							{" "}
							<Span
								font-weight="normal"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								под любые задачи{"\n\n"}
							</Span>
							<br />
							{"\n\n"}
						</Text>
						<List color="#8a959c" font="16px --fontFamily-googleRoboto" padding="0px 0px 0px 20px">
							<Text margin="16px 0px 22px 0px">
								Клиенты из 100+ стран
								<br />
								{"\n\n"}
							</Text>
							<Text margin="16px 0px 22px 0px">
								3,5 млн активных сайтов
								<br />
								{"\n\n"}
							</Text>
							<Text margin="16px 0px 22px 0px">
								Интеграции с востребованными
								<br />
								сервисами для бизнеса{"\n\n"}
								<br />
								{"\n\n"}
							</Text>
						</List>
						<List color="#8a959c" font="16px --fontFamily-googleRoboto" padding="0px 0px 0px 20px" />
						<List color="#8a959c" font="16px --fontFamily-googleRoboto" padding="0px 0px 0px 20px" />
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" margin="0px 0px 23px 0px" />
					{"        "}
					<Box height="160px" width="150px" background="rgba(0, 0, 0, 0) url(https://ukit.group/img/i_direct02.svg) center center no-repeat scroll padding-box" />
					<Box margin="0px 0px 0px 50px">
						<Text font="normal 800 25px/1.2 --fontFamily-googleRoboto" margin="0px 0px 22px 0px" display="inline-block" as="h3">
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								White label интеграции
								<br />
							</Span>
							<Span
								font-weight="normal"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								для роста бизнеса
								<br />
								партнеров{"\n"}
							</Span>
							<br />
							{"\n\n"}
						</Text>
						<List color="#8a959c" font="16px --fontFamily-googleRoboto" padding="0px 0px 0px 20px">
							<Text margin="16px 0px 22px 0px">
								Локализация на любые языки
								<br />
								{"\n\n"}
							</Text>
							<Text margin="16px 0px 22px 0px">
								Хостеры, регистраторы доменов,{" "}
								<br />
								сервисы для МСБ
							</Text>
							<Text margin="16px 0px 22px 0px">
								Модель разделения доходов
								<br />
								{"\n\n"}
							</Text>
						</List>
						<List color="#8a959c" font="16px --fontFamily-googleRoboto" padding="0px 0px 0px 20px" />
						<List color="#8a959c" font="16px --fontFamily-googleRoboto" padding="0px 0px 0px 20px" />
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" margin="0px 0px 50px 0px" />
					{"        "}
					<Box height="160px" width="150px" background="rgba(0, 0, 0, 0) url(https://ukit.group/img/i_direct03.svg) center center no-repeat scroll padding-box" />
					<Box margin="0px 0px 0px 50px">
						<Text font="normal 800 25px/1.2 --fontFamily-googleRoboto" margin="0px 0px 22px 0px" display="inline-block" as="h3">
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								ИИ-решения:{" "}
							</Span>
							<Span
								font-weight="normal"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								редизайн
								<br />
								сайтов с использованием нейросетей{"\n\n\n"}
							</Span>
							<br />
							{"\n\n"}
						</Text>
						<List color="#8a959c" font="16px --fontFamily-googleRoboto" padding="0px 0px 0px 20px">
							<Text margin="16px 0px 22px 0px">
								Применимо для любых платформ
							</Text>
							<Text margin="16px 0px 22px 0px">
								Закрывает «боли» пользователей
								<br />
								интернета
							</Text>
							<Text margin="16px 0px 22px 0px">
								Эффективно для бизнеса
							</Text>
						</List>
						<List color="#8a959c" font="16px --fontFamily-googleRoboto" padding="0px 0px 0px 20px" />
						<List color="#8a959c" font="16px --fontFamily-googleRoboto" padding="0px 0px 0px 20px" />
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" margin="0px 0px 50px 0px" />
					{"        "}
					<Box height="160px" width="150px" background="rgba(0, 0, 0, 0) url(https://ukit.group/img/i_direct04.svg) center center no-repeat scroll padding-box" />
					<Box margin="0px 0px 0px 50px">
						<Text font="normal 800 25px/1.2 --fontFamily-googleRoboto" margin="0px 0px 22px 0px" display="inline-block" as="h3">
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Дополнения для сайтов
								<br />
							</Span>
							<Span
								font-weight="normal"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								на любых CMS{"\n"}
							</Span>
							<br />
							{"\n\n"}
						</Text>
						<List color="#8a959c" font="16px --fontFamily-googleRoboto" padding="0px 0px 0px 20px">
							<Text margin="16px 0px 22px 0px">
								8 млн просмотров кнопок соцсетей{" "}
								<br />
								uSocial в день
							</Text>
							<Text margin="16px 0px 22px 0px">
								100 000 форм и калькуляторов на базе{" "}
								<br />
								uCalc
							</Text>
							<Text margin="16px 0px 22px 0px">
								Divly - разработка сайтов, лендингов и{" "}
								<br />
								магазинов. Выполненных работ 5000+
							</Text>
						</List>
						<List color="#8a959c" font="16px --fontFamily-googleRoboto" padding="0px 0px 0px 20px" />
						<List color="#8a959c" font="16px --fontFamily-googleRoboto" padding="0px 0px 0px 20px" />
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#1d262f url(https://ukit.group/img/bg_pattern.png) center 30px no-repeat" padding="100px 0 120px 0">
			<Override slot="SectionContent" />
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex" padding="16px 16px 0px 16px" margin="0px 0px 42px 0px">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text font="normal 800 50px/1.5 --fontFamily-googleRoboto" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
						Основные проекты
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="100%" display="flex" padding="70px 100px 70px 100px" margin="0px 0px">
					<Override
						slot="StackItemContent"
						padding="70px 100px 70px 100px"
						background="#fff"
						border-radius="10px"
						align-items="center"
						justify-content="center"
					/>
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						Здесь табы
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#6f7ed2 url(https://ukit.group/img/bg_all_products.jpg) center center/cover no-repeat" padding="100px 0 120px 0" align-items="center" justify-content="center">
			<Override slot="SectionContent" align-items="center" justify-content="center" />
			<Text color="#ffffff" font="800 50px/1.2em --fontFamily-googleRoboto" text-align="center" margin="16px 0px 50px 0px">
				Экосистема для тех, кто{" "}
				<br />
				создает и заказывает сайты
				<br />
				{"\n\n"}
			</Text>
			<Text font="400 18px/1.2em --fontFamily-googleRoboto" color="#ffffff" text-align="center" margin="16px 0px 60px 0px">
				Многие проекты uKit Group формируют линейку специализированных и дополняющих друг друга решений, доступных как пользователям наших конструкторов, так и владельцам сайтов на других платформах.
				<Link href="https://ukit.group/products">
					{"\n\n"}
				</Link>
				<br />
				{"\n\n"}
			</Text>
			<Button
				background="rgba(0, 119, 204, 0)"
				border-width="2px"
				border-color="rgba(255,219,94,0.7)"
				border-style="solid"
				color="#ffdb5e"
				font="normal 600 20px/52px --fontFamily-googleRoboto"
				min-width="280px"
				border-radius="33px"
				hover-background="#ffdb5e"
				hover-color="#000000"
				transition="all 0.2s linear"
			>
				Все проекты
			</Button>
		</Section>
		<Section padding="107px 0px">
			<Stack>
				{"    "}
				<StackItem width="50%" display="flex" flex-direction="column" padding="16px 16px 14px 16px">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-end" />
					{"        "}
					<Text font="normal 800 50px/1.5 --fontFamily-googleRoboto" margin="0px 0px 51px 0px" display="inline-block" color="#222222">
						Точки роста
						<br />
						{"\n\n"}
					</Text>
					<Text font="normal 400 18px/1.5em --fontFamily-googleRoboto" margin="0px 0px 30px 0px" display="inline-block" color="#222222">
						В 1995 году процент бизнесов с сайтами равнялся примерно нулю. В 2020-х мы подойдем к тому, что половина компаний и предпринимателей в мире будут иметь свое веб-представительство.
						<br />
						<br />
						{" "}Сайты активно востребованы бизнесом для продвижения в поиске, контекстной рекламе — страничка в соцсети есть не у каждого, браузер есть у всех. uKit Group дает предпринимателям удобный инструмент для комплексного продвижения своего дела в интернете.
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" padding="13px 16px 16px 16px">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" flex-direction="column" />
					{"        "}
					<Text
						font="normal 400 25px/1.5 --fontFamily-googleRoboto"
						margin="0px 0px 26px 0px"
						display="inline-block"
						color="#8a959c"
						text-align="center"
						padding="0px 0px 0px 0px"
					>
						<Strong>
							250+ млн
						</Strong>
						{" "}малых бизнесов в мире
						<br />
						{"\n\n"}
					</Text>
					<Box
						display="flex"
						height="auto"
						align-items="flex-end"
						width="100%"
						margin="0px 0px 19px 0px"
					>
						<Box
							display="flex"
							align-items="flex-end"
							flex-direction="column"
							justify-content="flex-end"
							height="auto"
							width="33%"
						>
							<Text font="700 65px --fontFamily-googleRoboto" color="#ffd133" margin="0px 0px 0px 0px">
								40%
							</Text>
							<Text color="#9eb3ff" font="300 40px --fontFamily-googleRoboto" text-align="right" margin="0px 0px 0px 0px">
								имеют
								<br />
								сайт{"\n\n\n\n"}
							</Text>
						</Box>
						<Box
							display="flex"
							align-items="flex-end"
							flex-direction="column"
							justify-content="flex-end"
							width="160px"
							height="165px"
							background="url(https://ukit.group/img/chart.png) top center no-repeat"
						/>
						<Box
							display="flex"
							align-items="flex-start"
							flex-direction="column"
							justify-content="flex-start"
							width="33%"
						>
							<Text font="700 65px --fontFamily-googleRoboto" color="#ffd133" text-align="left" margin="0px 0px 0px 0px">
								60%
							</Text>
							<Text font="normal 300 40px --fontFamily-googleRoboto" color="#9eb3ff" text-align="left" margin="0px 0px 0px 0px">
								не имеют
								<br />
								сайт{"\n\n\n\n"}
							</Text>
						</Box>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#F6F7F8" padding="107px 0 107px 0">
			<Override slot="SectionContent" />
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex" padding="16px 16px 0px 16px" margin="0px 0px 14px 0px">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="start"
						margin="0px 0px 0px 0px"
						color="#222222"
					/>
					{"        "}
					<Text
						font="normal 800 50px/1.5 --fontFamily-googleRoboto"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#222222"
						text-align="left"
					>
						Прессе{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="100%" display="flex" padding="0px 00px 0px 00px" margin="0px 0px 70px 0px">
					<Override
						slot="StackItemContent"
						padding="60px 65px 60px 65px"
						background="#fff"
						border-radius="10px"
						align-items="center"
						justify-content="center"
						box-shadow="0px 3px 30px rgba(43, 61, 80, 0.1)"
					/>
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						А здесь слайдер
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Stack>
				{"    "}
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" align-items="center" />
					<Text font="normal 400 18px/1.5 --fontFamily-googleRoboto" margin="0px 0px 0px 0px" display="inline-block" color="#222222">
						uKit Group открыта для СМИ: поделимся цифрами и фактами{" "}
						<br />
						о рынке сайтостроения в России и за рубежом, малом{" "}
						<br />
						бизнесе в интернете, трендами веб-паблишинга и опытом{" "}
						<br />
						продвижения на рынках четырех континентов.
						<br />
						{"\n\n"}
					</Text>
					{"        "}{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" height="auto" display="block" margin="1px 0px 0px 0px" />
					{"        "}
					<Button
						background="rgba(0, 119, 204, 0)"
						color="#687aee"
						border-width="2px"
						border-style="solid"
						border-color="#687aee"
						border-radius="35px"
						font="normal 400 18px/66px --fontFamily-googleRoboto"
						height="auto"
						padding="0px 24px 0px 24px"
						width="47%"
						margin="0px 30px 0px 0px"
						hover-background="#fff"
					>
						Все материалы
					</Button>
					<Button
						background="#687aee"
						color="#ffffff"
						border-width="2px"
						border-style="solid"
						border-color="#687aee"
						font="normal 400 18px/66px --fontFamily-googleRoboto"
						border-radius="35px"
						height="auto"
						padding="0px 24px 0px 24px"
						width="47%"
						hover-background="#4d63eb"
					>
						История компании
					</Button>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="107px 0 117px 0">
			<Stack>
				{"    "}
				<StackItem
					width="100%"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 20px"
					padding="16px 16px 16px 16px"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text font="normal 600 50px/1.3 --fontFamily-googleRoboto" margin="0px 0px 0px 0px" display="inline-block" as="h2">
						Партнерства и возможности
					</Text>
					<Text font="normal 600 50px/1.2 --fontFamily-googleRoboto" margin="0px 0px 50px 0px" display="inline-block" as="h2">
						сотрудничества{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					{"        "}
					<Box padding="115px 0px 0px 0px" background="rgba(0, 0, 0, 0) url(https://ukit.group/img/logo_mailru.png) 0% 0% /auto no-repeat scroll padding-box">
						<Text font="normal 450 18px/1.5 --fontFamily-sans" margin="0px 0px 0px 0px" display="inline-block" color="#8a959c">
							Сотрудничество в сфере сервисов{" "}
							<br />
							и инструментов для малого бизнеса{" "}
							<br />
							и владельцев сайтов в Рунете: «Почта{" "}
							<br />
							для сайта» и «Клуб для бизнеса».
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					{"        "}
					<Box padding="115px 0px 0px 0px" background="rgba(0, 0, 0, 0) url(https://ukit.group/img/logo_paginamx.png) 0% 0% /auto no-repeat scroll padding-box">
						<Text font="normal 450 18px/1.5 --fontFamily-sans" margin="0px 0px 0px 0px" display="inline-block" color="#8a959c">
							White label интеграция для крупного доменного регистратора в Мексике. Повышение среднего чека партнера за счет дополняющей основной бизнес услуги.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					{"        "}
					<Box padding="115px 0px 0px 0px" background="rgba(0, 0, 0, 0) url(https://ukit.group/img/logo_elamaru.png) 0% 0% /auto no-repeat scroll padding-box">
						<Text font="normal 450 18px/1.5 --fontFamily-sans" margin="0px 0px 0px 0px" display="inline-block" color="#8a959c">
							Сотрудничество в производстве{" "}
							<br />
							контента для предпринимателей{" "}
							<br />
							и маркетологов и специальные предложения на проекты uKit Group.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#4e64ec" height="100vh">
			<Override slot="SectionContent" align-items="center" justify-content="flex-end" />
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text
						font="normal 800 50px/1.5 --fontFamily-googleRoboto"
						margin="0px 0px 55px 0px"
						display="inline-block"
						color="#ffffff"
						text-align="center"
					>
						Связаться с нами
						<br />
						{"\n\n"}
					</Text>
					<Text font="normal 800 50px/1.5 --fontFamily-googleRoboto" margin="0px 0px 155px 0px" display="inline-block" color="#ffffff">
						В{" \n"}
						<Link href="https://formspree.io/forms">
							formspree.io
						</Link>
						{" "}лимит по формам
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Hr width="100%" border-color="rgba(255,255,255,0.1)" border-width="6px 0 0 0" />
			<Stack width="100%">
				{"    "}
				<StackItem width="25%" display="flex">
					{"        "}
					<Box background="rgba(0, 0, 0, 0) url(https://ukit.group/img/logo_ukit_group.png) 0% 0% /auto no-repeat scroll padding-box" padding="0px 0px 11% 0px" width="100%" margin="6px 0px 0px 0px" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="20%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text font="normal 600 18px/1.5 --fontFamily-googleRoboto" margin="0px 0px 18px 0px" display="inline-block" color="#ffffff">
						О компании
					</Text>
					<Text font="normal 400 16px/1.5 --fontFamily-googleRoboto" margin="0px 0px 16px 0px" display="inline-block" color="#bcd0ff">
						Блог uCoz
					</Text>
					<Text font="normal 400 16px/1.5 --fontFamily-googleRoboto" margin="0px 0px 16px 0px" display="inline-block" color="#bcd0ff">
						Блог uKit
					</Text>
					<Text font="normal 400 16px/1.5 --fontFamily-googleRoboto" margin="0px 0px 16px 0px" display="inline-block" color="#bcd0ff">
						Справка о компании
					</Text>
					<Text font="normal 400 16px/1.5 --fontFamily-googleRoboto" margin="0px 0px 16px 0px" display="inline-block" color="#bcd0ff">
						Медиа-кит
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="30%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text font="normal 600 18px/1.5 --fontFamily-googleRoboto" margin="0px 0px 18px 0px" display="inline-block" color="#ffffff">
						Работа в uKit Group
					</Text>
					<Text font="normal 400 16px/1.5 --fontFamily-googleRoboto" margin="0px 0px 16px 0px" display="inline-block" color="#bcd0ff">
						Вакансии в Москве
					</Text>
					<Text font="normal 400 16px/1.5 --fontFamily-googleRoboto" margin="0px 0px 16px 0px" display="inline-block" color="#bcd0ff">
						Вакансии в Санкт-Петербурге{"\n\n"}
					</Text>
					<Text font="normal 400 16px/1.5 --fontFamily-googleRoboto" margin="0px 0px 16px 0px" display="inline-block" color="#bcd0ff">
						Вакансии в Ростове-на-Дону
					</Text>
					<Text font="normal 400 16px/1.5 --fontFamily-googleRoboto" margin="0px 0px 16px 0px" display="inline-block" color="#bcd0ff">
						Вакансии в Черкассах (Украина)
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text font="normal 600 18px/1.5 --fontFamily-googleRoboto" margin="0px 0px 18px 0px" display="inline-block" color="#ffffff">
						Контакты
					</Text>
					<Text font="normal 400 16px/1.5 --fontFamily-googleRoboto" margin="0px 0px 16px 0px" display="inline-block" color="#bcd0ff">
						pr@ukit.group{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
	</Theme>;
});