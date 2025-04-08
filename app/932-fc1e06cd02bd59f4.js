"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[932], {
		7932: function(e, t, r) {
			r.r(t), r.d(t, {
				default: function() {
					return X
				}
			});
			var a = r(57437),
				s = r(2265),
				n = r(2403),
				o = r(28933),
				l = r(73901),
				i = r.n(l),
				c = r(51981);
			r(28262), r(11197);
			var u = r(51559),
				d = r(9805),
				p = e => (0, a.jsx)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "1em",
					height: "1em",
					viewBox: "0 0 24 24",
					...e,
					children: (0, a.jsx)("path", {
						fill: "none",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: "2",
						d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0"
					})
				}),
				g = r(54440),
				m = r.n(g),
				h = r(98387),
				f = r(86259),
				x = r(4230);
			let v = (0, x.Z)({
				en: {
					restartWarning: "You are going to lose all your progress. Are you sure?",
					introInstruction: "Type a station name, and press Enter",
					backToTheGame: "Back to the game",
					stations: e => {
						let {
							count: t
						} = e;
						return `${t} station${t>1?"s":""}`
					},
					stationsFound: "stations found",
					inputPlaceholder: "Station",
					alreadyFound: "Already found",
					startOver: "Start over",
					showSolutions: "Show solutions",
					hideSolutions: "Hide solutions",
					about: "About",

				},
				fr: {
					restartWarning: "Vous allez perdre tout votre progression. \xcates-vous s\xfbr de vouloir recommencer ?",
					introInstruction: "Tapez le nom d’une station, et appuyez sur Entr\xe9e",
					backToTheGame: "Retour au jeu",
					stations: e => {
						let {
							count: t
						} = e;
						return `${t} station${t>1?"s":""}`
					},
					stationsFound: "stations trouv\xe9es",
					inputPlaceholder: "Station",
					alreadyFound: "D\xe9j\xe0 trouv\xe9e",
					startOver: "Recommencer",
					showSolutions: "Afficher les solutions",
					hideSolutions: "Masquer les solutions",
					supportProject: "Soutenir le projet",
					about: "\xc0 propos",
					congrats: e => {
						let {
							foundProportion: t
						} = e;
						return `Bravo, vous avez atteint les ${10*Math.floor(100*t/10)}% !`
					},
					freeGame: "Ce jeu est gratuit.",
					supportWithDonation: e => {
						let {
							title: t
						} = e;
						return (0, a.jsxs)("span", {
							children: ["Soutenez le d\xe9veloppement de ", (0, a.jsx)("strong", {
								children: t
							}), " en faisant un don."]
						})
					},
					opensANewTab: "Ce lien ouvrira un nouvel onglet et votre progression est sauvegard\xe9e dans votre navigateur.",
					keepGoingForFree: "Continuer gratuitement",
					sort: {
						order: "Date d’ajout",
						line: "Ligne",
						name: "Nom"
					}
				},
				es: {
					restartWarning: "Vas a perder todo tu progreso. \xbfEst\xe1s seguro de que quieres empezar de nuevo?",
					introInstruction: "Escribe el nombre de una estaci\xf3n, y pulsa Enter",
					backToTheGame: "Volver al juego",
					stations: e => {
						let {
							count: t
						} = e;
						return `${t} estaci\xf3n${t>1?"es":""}`
					},
					stationsFound: "estaciones encontradas",
					inputPlaceholder: "Estaci\xf3n",
					alreadyFound: "Ya encontrada",
					startOver: "Empezar de nuevo",
					showSolutions: "Mostrar soluciones",
					hideSolutions: "Ocultar soluciones",
					supportProject: "Apoya el proyecto",
					about: "Acerca de",
					congrats: e => {
						let {
							foundProportion: t
						} = e;
						return `\xa1Bien hecho, has llegado al ${Math.floor(100*t)}%!`
					},
					freeGame: "Este juego es gratuito.",
					supportWithDonation: e => {
						let {
							title: t
						} = e;
						return (0, a.jsxs)("span", {
							children: ["Apoya el desarrollo de ", (0, a.jsx)("strong", {
								children: t
							}), " haciendo una donaci\xf3n."]
						})
					},
					opensANewTab: "Este enlace abrir\xe1 una nueva pesta\xf1a y tu progreso se guarda en tu navegador.",
					keepGoingForFree: "Continuar gratis",
					sort: {
						order: "Fecha a\xf1adida",
						line: "L\xednea",
						name: "Nombre"
					}
				},
				ca: {
					restartWarning: "Perdr\xe0s tot el teu progr\xe9s. Est\xe0s segur que vols comen\xe7ar de nou?",
					introInstruction: "Escriu el nom d'una estaci\xf3, i prem Enter",
					backToTheGame: "Torna al joc",
					stations: e => {
						let {
							count: t
						} = e;
						return `${t} estaci\xf3${t>1?"s":""}`
					},
					stationsFound: "estacions trobades",
					inputPlaceholder: "Estaci\xf3",
					alreadyFound: "Ja trobada",
					startOver: "Comen\xe7ar de nou",
					showSolutions: "Mostra solucions",
					hideSolutions: "Amaga solucions",
					supportProject: "Ajuda el projecte",
					about: "Sobre",
					congrats: e => {
						let {
							foundProportion: t
						} = e;
						return `Molt b\xe9, has arribat al ${Math.floor(100*t)}%!`
					},
					freeGame: "Aquest joc \xe9s gratu\xeft.",
					supportWithDonation: e => {
						let {
							title: t
						} = e;
						return (0, a.jsxs)("span", {
							children: ["Ajuda el desenvolupament de ", (0, a.jsx)("strong", {
								children: t
							}), " fent una donaci\xf3."]
						})
					},
					opensANewTab: "Aquest enlla\xe7 obrir\xe0 una nova pestanya i el teu progr\xe9s es guarda al teu navegador.",
					keepGoingForFree: "Continua gratis",
					sort: {
						order: "Data afegida",
						line: "L\xednia",
						name: "Nom"
					}
				},
				de: {
					restartWarning: "Du wirst deinen Fortschritt verlieren. Bist du sicher, dass du von vorne anfangen willst?",
					introInstruction: "Gib den Namen einer Station ein, und dr\xfccke Enter",
					backToTheGame: "Zur\xfcck zum Spiel",
					stations: e => {
						let {
							count: t
						} = e;
						return `${t} Station${t>1?"en":""}`
					},
					stationsFound: "Stationen gefunden",
					inputPlaceholder: "Station",
					alreadyFound: "Bereits gefunden",
					startOver: "Von vorne anfangen",
					showSolutions: "L\xf6sungen anzeigen",
					hideSolutions: "L\xf6sungen ausblenden",
					supportProject: "Projekt unterst\xfctzen",
					about: "\xdcber",
					congrats: e => {
						let {
							foundProportion: t
						} = e;
						return `Gut gemacht, du hast ${Math.floor(100*t)}% erreicht!`
					},
					freeGame: "Dieses Spiel ist kostenlos.",
					supportWithDonation: e => {
						let {
							title: t
						} = e;
						return (0, a.jsxs)("span", {
							children: ["Unterst\xfctze die Entwicklung von ", (0, a.jsx)("strong", {
								children: t
							}), " mit einer Spende."]
						})
					},
					opensANewTab: "Dieser Link \xf6ffnet einen neuen Tab und dein Fortschritt wird in deinem Browser gespeichert.",
					keepGoingForFree: "Kostenlos weitermachen",
					sort: {
						order: "Hinzugef\xfcgt am",
						line: "Linie",
						name: "Name"
					}
				},
				ko: {
					restartWarning: "진행한 모든 내용이 사라집니다. 계속하시겠습니까?",
					introInstruction: "역 이름을 입력하고 엔터 키를 누르세요",
					backToTheGame: "게임으로 돌아가기",
					stations: e => {
						let {
							count: t
						} = e;
						return `${t}개의 역`
					},
					stationsFound: "역 발견됨",
					inputPlaceholder: "역 이름",
					alreadyFound: "이미 찾음",
					startOver: "처음부터 다시 시작하기",
					showSolutions: "해답 보기",
					hideSolutions: "해답 숨기기",
					supportProject: "프로젝트 후원하기",
					about: "정보",
					congrats: e => {
						let {
							foundProportion: t
						} = e;
						return `축하합니다! ${Math.floor(100*t)}% 달성했어요!`
					},
					freeGame: "이 게임은 무료로 제공됩니다.",
					supportWithDonation: e => {
						let {
							title: t
						} = e;
						return `<span><strong>${t}</strong> 개발을 후원하기 위해 기부해 주세요.</span>`
					},
					opensANewTab: "이 링크를 클릭하면 새 탭에서 열리며, 진행 상황은 브라우저에 저장됩니다.",
					keepGoingForFree: "무료로 계속 진행하기",
					sort: {
						order: "추가된 날짜",
						line: "노선",
						name: "이름"
					}
				},
				tr: {
					restartWarning: "T\xfcm ilerlemeniz kaybolacak. Yeniden başlamak istediğinize emin misiniz?",
					introInstruction: "Bir istasyon adı girin ve Enter tuşuna basın",
					backToTheGame: "Oyuna geri d\xf6n",
					stations: e => {
						let {
							count: t
						} = e;
						return `${t} istasyon`
					},
					stationsFound: "istasyon bulundu",
					inputPlaceholder: "İstasyon",
					alreadyFound: "Zaten bulundu",
					startOver: "Yeniden başla",
					showSolutions: "\xc7\xf6z\xfcmleri g\xf6ster",
					hideSolutions: "\xc7\xf6z\xfcmleri gizle",
					supportProject: "Projeyi destekle",
					about: "Hakkında",
					congrats: e => {
						let {
							foundProportion: t
						} = e;
						return `Tebrikler, ${Math.floor(100*t)}%'ye ulaştınız!`
					},
					freeGame: "Bu oyun \xfccretsizdir.",
					supportWithDonation: e => {
						let {
							title: t
						} = e;
						return (0, a.jsxs)("span", {
							children: [(0, a.jsx)("strong", {
								children: t
							}), " gelişimini bağış yaparak destekleyin."]
						})
					},
					opensANewTab: "Bu bağlantı yeni bir sekmede a\xe7ılır ve ilerlemeniz tarayıcınızda kaydedilir.",
					keepGoingForFree: "\xdccretsiz devam et",
					sort: {
						order: "Eklenme tarihi",
						line: "Hat",
						name: "İsim"
					}
				},
				jp: {
					restartWarning: "進捗が失われます。本当にやり直しますか？",
					introInstruction: "駅名を入力してEnterキーを押してください",
					backToTheGame: "ゲームに戻る",
					stations: e => {
						let {
							count: t
						} = e;
						return `${t}駅`
					},
					stationsFound: "駅が見つかりました",
					inputPlaceholder: "駅名",
					alreadyFound: "すでに見つかりました",
					startOver: "最初からやり直す",
					showSolutions: "解答を表示",
					hideSolutions: "解答を非表示",
					supportProject: "プロジェクトを支援する",
					about: "情報",
					congrats: e => {
						let {
							foundProportion: t
						} = e;
						return `おめでとうございます！${Math.floor(100*t)}%達成しました！`
					},
					freeGame: "このゲームは無料です。",
					supportWithDonation: e => {
						let {
							title: t
						} = e;
						return (0, a.jsxs)("span", {
							children: [(0, a.jsx)("strong", {
								children: t
							}), " の開発を寄付によって支援してください。"]
						})
					},
					opensANewTab: "このリンクをクリックすると新しいタブが開き、進捗はブラウザに保存されます。",
					keepGoingForFree: "無料で続ける",
					sort: {
						order: "追加された日付",
						line: "路線",
						name: "名前"
					}
				},
				sv: {
					restartWarning: "Du kommer att f\xf6rlora all din progress. \xc4r du s\xe4ker p\xe5 att du vill b\xf6rja om?",
					introInstruction: "Skriv in en station och tryck p\xe5 Enter",
					backToTheGame: "Tillbaka till spelet",
					stations: e => {
						let {
							count: t
						} = e;
						return `${t} station${t>1?"er":""}`
					},
					stationsFound: "stationer hittade",
					inputPlaceholder: "Station",
					alreadyFound: "Redan hittad",
					startOver: "B\xf6rja om",
					showSolutions: "Visa l\xf6sningar",
					hideSolutions: "D\xf6lj l\xf6sningar",
					supportProject: "St\xf6d projektet",
					about: "Om",
					congrats: e => {
						let {
							foundProportion: t
						} = e;
						return `Bra jobbat, du n\xe5dde ${Math.floor(100*t)}%!`
					},
					freeGame: "Detta spel \xe4r gratis.",
					supportWithDonation: e => {
						let {
							title: t
						} = e;
						return (0, a.jsxs)("span", {
							children: ["St\xf6d utvecklingen av ", (0, a.jsx)("strong", {
								children: t
							}), " genom att donera."]
						})
					},
					opensANewTab: "Denna l\xe4nk \xf6ppnar en ny flik och din progress sparas i din webbl\xe4sare.",
					keepGoingForFree: "Forts\xe4tt gratis",
					sort: {
						order: "Datum tillagt",
						line: "Linje",
						name: "Namn"
					}
				}
			});
			var y = () => {
				let {
					LOCALE: e
				} = (0, f.useConfig)();
				return v.locale(e), v
			};

			function b(e) {
				let {
					open: t,
					setOpen: r
				} = e, {
					METADATA: n
				} = (0, f.useConfig)(), {
					t: o
				} = y();
				return (0, a.jsx)(d.u.Root, {
					show: t,
					as: s.Fragment,
					children: (0, a.jsxs)(h.V, {
						as: "div",
						className: "relative z-50",
						onClose: r,
						children: [(0, a.jsx)(d.u.Child, {
							as: s.Fragment,
							enter: "ease-out duration-300",
							enterFrom: "opacity-0",
							enterTo: "opacity-100",
							leave: "ease-in duration-200",
							leaveFrom: "opacity-100",
							leaveTo: "opacity-0",
							children: (0, a.jsx)("div", {
								className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
							})
						}), (0, a.jsx)("div", {
							className: "fixed inset-0 z-10 w-screen overflow-y-auto",
							children: (0, a.jsx)("div", {
								className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
								children: (0, a.jsx)(d.u.Child, {
									as: s.Fragment,
									enter: "ease-out duration-300",
									enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
									enterTo: "opacity-100 translate-y-0 sm:scale-100",
									leave: "ease-in duration-200",
									leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
									leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
									children: (0, a.jsxs)(h.V.Panel, {
										className: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6",
										children: [(0, a.jsx)("div", {
											children: (0, a.jsxs)("div", {
												className: "mt-3 text-center sm:mt-5",
												children: [(0, a.jsx)(h.V.Title, {
													as: "h3",
													className: "text-base font-bold leading-6 text-gray-900",
													children: n.title
												}), (0, a.jsx)("div", {
													className: "mt-2",
													children: (0, a.jsxs)("p", {
														className: "text-sm text-gray-500",
														children: ["Made with HTML5, CSS3, and JS by", " ", (0, a.jsx)("a", {
															href: "",
															target: "_blank",
															rel: "noreferrer",
															className: "text-zinc-600 hover:text-zinc-500",
															children: "Norman Mei"
														}), " ", "(normanmei06@gmail.com)."]
													})
												})]
											})
										}), (0, a.jsx)("div", {
											className: "mt-5 sm:mt-6",
											children: (0, a.jsx)("button", {
												type: "button",
												className: "inline-flex w-full justify-center rounded-md bg-zinc-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600",
												onClick: () => r(!1),
												children: o("backToTheGame")
											})
										})]
									})
								})
							})
						})]
					})
				})
			}

			function j(e) {
				let {
					onReset: t,
					setHideLabels: r,
					hideLabels: n
				} = e, [o, l] = (0, s.useState)(!1), {
					STRIPE_LINK: i
				} = (0, f.useConfig)(), {
					t: c
				} = y();
				return (0, a.jsxs)(u.v, {
					as: "div",
					className: "relative inline-block text-left",
					children: [(0, a.jsx)("div", {
						children: (0, a.jsx)(u.v.Button, {
							className: "inline-flex h-12 w-12 items-center justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-lg outline-none ring-zinc-800 hover:bg-gray-50 focus:ring-2",
							children: (0, a.jsx)(p, {
								className: "h-5 w-5 text-gray-400",
								"aria-hidden": "true"
							})
						})
					}), (0, a.jsx)(d.u, {
						as: s.Fragment,
						enter: "transition ease-out duration-100",
						enterFrom: "transform opacity-0 scale-95",
						enterTo: "transform opacity-100 scale-100",
						leave: "transition ease-in duration-75",
						leaveFrom: "transform opacity-100 scale-100",
						leaveTo: "transform opacity-0 scale-95",
						children: (0, a.jsx)(u.v.Items, {
							className: "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
							children: (0, a.jsxs)("div", {
								className: "py-1",
								children: [(0, a.jsx)(u.v.Item, {
									children: e => {
										let {
											active: r
										} = e;
										return (0, a.jsx)("button", {
											className: m()(r ? "bg-gray-100 text-gray-900" : "text-gray-700", "block w-full px-4 py-2 text-left text-sm"),
											onClick: t,
											children: c("startOver")
										})
									}
								}), (0, a.jsx)(u.v.Item, {
									children: e => {
										let {
											active: t
										} = e;
										return (0, a.jsx)("button", {
											className: m()(t ? "bg-gray-100 text-gray-900" : "text-gray-700", "block w-full px-4 py-2 text-left text-sm"),
											onClick: () => r(!n),
											children: n ? c("showSolutions") : c("hideSolutions")
										})
									}

								}), (0, a.jsx)(u.v.Item, {
									children: e => {
										let {
											active: t
										} = e;
										return (0, a.jsx)("button", {
											className: m()(t ? "bg-gray-100 text-gray-900" : "text-gray-700", "block w-full px-4 py-2 text-left text-sm"),
											onClick: () => l(!0),
											children: c("about")
										})
									}
								})]
							})
						})
					}), (0, a.jsx)(b, {
						open: o,
						setOpen: l
					})]
				})
			}

			function w(e) {
				var t;
				let {
					open: r,
					setOpen: n,
					inputRef: o,
					children: l
				} = e;
				return null === (t = o.current) || void 0 === t || t.focus(), (0, a.jsx)(d.u.Root, {
					show: !!r,
					as: s.Fragment,
					children: (0, a.jsxs)("div", {
						className: "relative z-30 font-sans",
						onClick: () => n(!1),
						children: [(0, a.jsx)(d.u.Child, {
							as: s.Fragment,
							enter: "ease-out duration-300",
							enterFrom: "opacity-0",
							enterTo: "opacity-100",
							leave: "ease-in duration-200",
							leaveFrom: "opacity-100",
							leaveTo: "opacity-0",
							children: (0, a.jsx)("div", {
								className: "fixed inset-0 bg-gray-700 bg-opacity-80 transition-opacity"
							})
						}), (0, a.jsx)("div", {
							className: "fixed inset-0 z-10 w-screen overflow-y-auto",
							children: (0, a.jsx)("div", {
								className: "flex min-h-full justify-center p-4 text-center sm:items-center sm:p-0",
								children: (0, a.jsx)(d.u.Child, {
									as: s.Fragment,
									enter: "ease-out duration-300",
									enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
									enterTo: "opacity-100 translate-y-0 sm:scale-100",
									leave: "ease-in duration-200",
									leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
									leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
									children: (0, a.jsx)("div", {
										className: "relative transform overflow-hidden rounded-lg px-4 pb-4 pt-5 text-left font-sans text-white transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6",
										children: (0, a.jsx)("p", {
											className: "text-2xl",
											children: l
										})
									})
								})
							})
						})]
					})
				})
			}
			var k = r(89930),
				N = r(57178),
				F = r(16691),
				T = r.n(F),
				z = e => {
					let {
						foundStationsPerLine: t,
						stationsPerLine: r,
						minimized: s = !1
					} = e, {
						LINES: n,
						GAUGE_COLORS: o
					} = (0, f.useConfig)();
					return (0, a.jsx)("div", {
						className: m()("grid gap-2 @container", {
							"grid-cols-[repeat(8,min-content)]": s,
							"grid-cols-2": !s
						}),
						children: Object.keys(n).map(e => {
							let l = `${n[e].name} - ${t[e]||0}/${r[e]}`;
							return (0, a.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [(0, a.jsxs)("div", {
									title: l,
									className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
									children: [(0, a.jsx)("div", {
										className: "absolute h-full w-full rounded-full shadow",
										children: (0, a.jsx)(N.Ip, {
											background: !0,
											backgroundPadding: 2,
											styles: (0, N.y3)({
												backgroundColor: "inverted" === o ? "white" : n[e].color,
												pathColor: "inverted" === o ? n[e].color : n[e].textColor,
												trailColor: "transparent"
											}),
											value: 100 * (t[e] || 0) / r[e]
										})
									}), (0, a.jsx)(T(), {
										alt: e,
										src: `/images/${e}.svg`,
										width: 64,
										height: 64,
										className: "z-20 h-6 w-6 rounded-full object-cover"
									})]
								}), !s && (0, a.jsx)("p", {
									className: "truncate whitespace-nowrap text-sm",
									children: l
								})]
							}, e)
						})
					})
				};

			function C(e) {
				return (0, a.jsx)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "1em",
					height: "1em",
					viewBox: "0 0 24 24",
					...e,
					children: (0, a.jsx)("path", {
						fill: "currentColor",
						d: "M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6l-1.41-1.41z"
					})
				})
			}

			function S(e) {
				return (0, a.jsx)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "1em",
					height: "1em",
					viewBox: "0 0 24 24",
					...e,
					children: (0, a.jsx)("path", {
						fill: "currentColor",
						d: "m12 10.775l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.213T12 8.4q.2 0 .375.063t.325.212l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-3.9-3.9Z"
					})
				})
			}
			var M = e => {
				let {
					className: t,
					foundStationsPerLine: n,
					stationsPerLine: o,
					foundProportion: l,
					minimizable: i = !1,
					defaultMinimized: c = !1
				} = e, {
					t: u
				} = y(), d = (0, k.D)(n), [p, g] = (0, s.useState)(c);
				return (0, s.useEffect)(() => {
					let e = Object.keys(n).filter(e => d && n[e] > d[e] && n[e] === o[e]);
					if (e.length > 0) {
						let t = async () => {
							let t = (await r.e(353).then(r.bind(r, 2179))).confetti;
							t({
								spread: 120,
								ticks: 200,
								particleCount: 150,
								origin: {
									y: .2
								},
								decay: .85,
								gravity: 2,
								startVelocity: 50,
								shapes: ["image"],
								scalar: 2,
								shapeOptions: {
									image: e.map(e => ({
										src: `/images/${e}.svg`,
										width: 64,
										height: 64
									}))
								}
							})
						};
						t()
					}
				}, [d, n, o]), (0, a.jsxs)("div", {
					className: m()(t, "@container", {
						relative: i
					}),
					children: [(0, a.jsxs)("div", {
						className: "mb-2",
						children: [(0, a.jsxs)("p", {
							className: "mb-2",
							children: [(0, a.jsx)("span", {
								className: "text-lg font-bold @md:text-2xl",
								children: (100 * (l || 0)).toFixed(1)
							}), " ", (0, a.jsx)("span", {
								className: "mr-2 text-lg @md:text-xl",
								children: "%"
							}), (0, a.jsx)("span", {
								className: "text-sm",
								children: u("stationsFound")
							})]
						}), (0, a.jsx)(z, {
							minimized: p,
							foundStationsPerLine: n,
							stationsPerLine: o
						})]
					}), i && (0, a.jsx)("div", {
						className: "absolute bottom-0 right-0",
						children: (0, a.jsx)("button", {
							onClick: () => g(!p),
							className: "mx-2 my-1 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-500 shadow",
							children: p ? (0, a.jsx)(C, {
								className: "h-4 w-4"
							}) : (0, a.jsx)(S, {
								className: "h-4 w-4"
							})
						})
					})]
				})
			};
			let P = {
					default: e => e,
					ny: e => e.replace(/street/g, "st")
                    .replace(/ avenue/g, " av")
                    .replace(/ avenues/g, " avs")
                    .replace(/ streets/g, " sts")
                    .replace(/ ave/g, " av")
                    .replace(/ heights/g, " hts")
                    .replace(/ road/g, " rd")
                    .replace(/ parkway/g, " pkwy")
                    .replace(/ square/g, " sq")
                    .replace(/ drive/g, " dr")
                    .replace(/ junction/g, " jct")
                    .replace(/ place/g, " pl")
                    .replace(/ center/g, " ctr")
                    .replace(/ boulevard/g, " blvd")
                    .replace(/ highway/g, " hwy")
                    .replace(/broadway/g, "b'way")
                    .replace(/broadway/g, "bway")
                    .replace(/new york university/g, "nyu")
                    .replace(/city college/g, "ccny")
                    .replace(/new york/g, "ny")
                    .replace(/airport/g, "")
                    .replace(/washington/g, "wash")
                    .replace(/brooklyn/g, "blkyn")
                    .replace(/queens/g, "qns")
                    .replace(/saint /g, "st ")
                    .replace(/mount /g, "mt ")
                    .replace(/first /g, "1 ")
                    .replace(/second /g, "2 ")
                    .replace(/third /g, "3 ")
                    .replace(/fourth /g, "4 ")
                    .replace(/fifth /g, "5 ")
                    .replace(/sixth /g, "6 ")
                    .replace(/seventh /g, "7 ")
                    .replace(/eighth /g, "8 ")
                    .replace(/ninth /g, "9 ")
                    .replace(/tenth /g, "10 ")
                    .replace(/eleventh /g, "11 ")
                    .replace(/twelfth /g, "12 ")
                    .replace(/thirteenth /g, "13 ")
                    .replace(/fourteenth /g, "14 ")
                    .replace(/fifteenth /g, "15 ")
                    .replace(/sixteenth /g, "16 ")
                    .replace(/seventeenth /g, "17 ")
                    .replace(/eighteenth /g, "18 ")
                    .replace(/nineteenth /g, "19 ")
                    .replace(/twentieth /g, "20 ")
                    .replace(/twenty-first /g, "21 ")
                    .replace(/twenty-second /g, "22 ")
                    .replace(/twenty-third /g, "23 ")
                    .replace(/twenty-fourth /g, "24 ")
                    .replace(/twenty-fifth /g, "25 ")
                    .replace(/twenty-sixth /g, "26 ")
                    .replace(/twenty-seventh /g, "27 ")
                    .replace(/twenty-eighth /g, "28 ")
                    .replace(/twenty-ninth /g, "29 ")
                    .replace(/thirtieth /g, "30 ")
                    .replace(/th /g, " ")
                    .replace(/stadium /g, "stad")
                    .replace(/1st /g, "1 ")
                    .replace(/2nd /g, "2 ")
                    .replace(/3rd /g, "3 ")
                    .replace(/east /g, "e ")
                    .replace(/west /g, "w ")
                    .replace(/north /g, "n ")
                    .replace(/south /g, "s ")
                    .replace(/ and /g, " ")
                    .replace(/ & /g, " ")
                    .replace(/terrace/g, "ter")
                    .replace(/lane/g, "ln")
                    .replace(/court/g, "ct")
                    .replace(/circle/g, "cir")
                    .replace(/oval/g, "ovl")
                    .replace(/crescent/g, "cres")
                    .replace(/plaza/g, "plz")
                    .replace(/promenade/g, "prom")
                    .replace(/alley/g, "aly")
                    .replace(/path/g, "path")
                    .replace(/trail/g, "trl")
                    .replace(/park/g, "pk")
                    .replace(/gardens/g, "gdns")
                    .replace(/estates/g, "ests")
                    .replace(/landing/g, "lndg")
                    .replace(/crossing/g, "xing")
                    .replace(/station/g, "sta")
                    .replace(/annex/g, "anx")
                    .replace(/arcade/g, "arc")
                    .replace(/bayou/g, "byu")
                    .replace(/beach/g, "bch")
                    .replace(/bend/g, "bnd")
                    .replace(/bluff/g, "blf")
                    .replace(/bluffs/g, "blfs")
                    .replace(/bottom/g, "btm")
                    .replace(/branch/g, "br")
                    .replace(/bridge/g, "brg")
                    .replace(/brook/g, "brk")
                    .replace(/brooks/g, "brks")
                    .replace(/burg/g, "bg")
                    .replace(/burgs/g, "bgs")
                    .replace(/bypass/g, "byp")
                    .replace(/camp/g, "cp")
                    .replace(/canyon/g, "cyn")
                    .replace(/cape/g, "cpe")
                    .replace(/causeway/g, "cswy")
                    .replace(/centers/g, "ctrs")
                    .replace(/circles/g, "cirs")
                    .replace(/cliff/g, "clf")
                    .replace(/cliffs/g, "clfs")
                    .replace(/club/g, "clb")
                    .replace(/common/g, "cmn")
                    .replace(/commons/g, "cmns")
                    .replace(/corner/g, "cor")
                    .replace(/corners/g, "cors")
                    .replace(/course/g, "crse")
                    .replace(/courts/g, "cts")
                    .replace(/cove/g, "cv")
                    .replace(/coves/g, "cvs")
                    .replace(/creek/g, "crk")
                    .replace(/crest/g, "crst")
                    .replace(/crossroad/g, "xrd")
                    .replace(/crossroads/g, "xrds")
                    .replace(/curve/g, "curv")
                    .replace(/dale/g, "dl")
                    .replace(/dam/g, "dm")
                    .replace(/divide/g, "dv")
                    .replace(/drives/g, "drs")
                    .replace(/estate/g, "est")
                    .replace(/expressway/g, "expy")
                    .replace(/extension/g, "ext")
                    .replace(/extensions/g, "exts")
                    .replace(/fall/g, "fall")
                    .replace(/falls/g, "fls")
                    .replace(/ferry/g, "fry")
                    .replace(/field/g, "fld")
                    .replace(/fields/g, "flds")
                    .replace(/flat/g, "flt")
                    .replace(/flats/g, "flts")
                    .replace(/ford/g, "frd")
                    .replace(/fords/g, "frds")
                    .replace(/forest/g, "frst")
                    .replace(/forge/g, "fgr")
                    .replace(/forges/g, "fgrs")
                    .replace(/fork/g, "frk")
                    .replace(/forks/g, "frks")
                    .replace(/fort/g, "ft")
                    .replace(/freeway/g, "fwy")
                    .replace(/gateway/g, "gtwy")
                    .replace(/glen/g, "gln")
                    .replace(/glens/g, "glns")
                    .replace(/green/g, "grn")
                    .replace(/greens/g, "grns")
                    .replace(/grove/g, "grv")
                    .replace(/groves/g, "grvs")
                    .replace(/harbor/g, "hbr")
                    .replace(/harbors/g, "hbrs")
                    .replace(/haven/g, "hvn")
                    .replace(/height/g, "ht")
                    .replace(/hill/g, "hl")
                    .replace(/hills/g, "hls")
                    .replace(/hollow/g, "holw")
                    .replace(/inlet/g, "inlt")
                    .replace(/island/g, "is")
                    .replace(/islands/g, "iss")
                    .replace(/isle/g, "isle")
                    .replace(/junctions/g, "jcts")
                    .replace(/key/g, "ky")
                    .replace(/keys/g, "kys")
                    .replace(/knoll/g, "knl")
                    .replace(/knolls/g, "knls")
                    .replace(/lake/g, "lk")
                    .replace(/lakes/g, "lks")
                    .replace(/light/g, "lgt")
                    .replace(/lights/g, "lgts")
                    .replace(/loaf/g, "lf")
                    .replace(/lock/g, "lck")
                    .replace(/locks/g, "lcks")
                    .replace(/lodge/g, "ldg")
                    .replace(/loop/g, "loop")
                    .replace(/mall/g, "mall")
                    .replace(/manor/g, "mnr")
                    .replace(/manors/g, "mnrs")
                    .replace(/meadow/g, "mdw")
                    .replace(/meadows/g, "mdws")
                    .replace(/mews/g, "mews")
                    .replace(/mill/g, "ml")
                    .replace(/mills/g, "mls")
                    .replace(/mission/g, "msn")
                    .replace(/motorway/g, "mtwy")
                    .replace(/mountain/g, "mtn")
                    .replace(/mountains/g, "mtns")
                    .replace(/orchard/g, "orch")
                    .replace(/overpass/g, "opas")
                    .replace(/pike/g, "pike")
                    .replace(/plain/g, "pln")
                    .replace(/plains/g, "plns")
                    .replace(/point/g, "pt")
                    .replace(/points/g, "pts")
                    .replace(/port/g, "prt")
                    .replace(/ports/g, "prts")
                    .replace(/summit/g, "smt")
                    .replace(/valley/g, "vly")
                    .replace(/valleys/g, "vlys")
                    .replace(/viaduct/g, "via")
                    .replace(/view/g, "vw")
                    .replace(/walk/g, "walk")
                    .replace(/way/g, "way")
                    .replace(/ways/g, "ways")


				},
				L = e => P[e] || P.default,
				E = e => {
					if ("seoul" === e || "tokyo" === e) return L(e);
					let t = e => (e || "").toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ").replace(/[\u2010-\u2015]/g, " ").replace(/[\u0300-\u036F]/g, ""),
						r = L(e),
						a = e => (e || "").normalize("NFD").replace(/[^a-z0-9]/g, "").replace(/\s+/g, " ").trim();
					return e => a(r(t(e)))
				};
			var $ = () => {
				let {
					CITY_NAME: e
				} = (0, f.useConfig)();
				return E(e)
			};
			let G = e => {
				0 !== e.length && fetch("/api/count", {
					method: "POST",
					body: JSON.stringify({
						matches: e
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
			};
			var D = () => {
					let {
						CITY_NAME: e
					} = (0, f.useConfig)();
					return t => G(t.map(t => `${e}-${t}`))
				},
				O = e => {
					let {
						fuse: t,
						found: r,
						setFound: n,
						setIsNewPlayer: o,
						inputRef: l,
						map: i,
						idMap: c
					} = e, {
						t: u
					} = y(), p = $(), [g, h] = (0, s.useState)(""), [f, x] = (0, s.useState)(!1), [v, b] = (0, s.useState)(!1), [j, w] = (0, s.useState)(!1), k = D(), N = (0, s.useCallback)(e => {
						if (i) {
							let t = c.get(e);
							if (!t) return;
							let [r, a] = t.geometry.coordinates;
							i.flyTo({
								center: [r, a],
								zoom: 13,
								duration: 200
							})
						}
					}, [i, c]), F = (0, s.useCallback)(e => {
						if ("Enter" !== e.key || !g) return;
						e.preventDefault();
						let a = p(g),
							s = t.search(a),
							l = !1,
							u = [];
						for (let e = 0; e < s.length; e++) {
							let t = s[e];
							t.matches && t.matches.length && t.matches.some(e => 0 === e.indices[0][0] && e.value.length - e.indices[e.indices.length - 1][1] < 2 && 4 > Math.abs(e.value.length - a.length)) && (-1 === (r || []).indexOf(+t.item.id) ? u.push(+t.item.id) : (l = !0, w(!0), setTimeout(() => w(!1), 1200)))
						}
						if (0 !== u.length || l) b(!0), setTimeout(() => b(!1), 250), i && (i.getSource("hovered").setData({
							type: "FeatureCollection",
							features: (u || []).map(e => c.get(e))
						}), setTimeout(() => {
							i.getSource("hovered").setData({
								type: "FeatureCollection",
								features: []
							})
						}, 1500)), N(u[0]), n([...u, ...r || []]), o(!1), h(""), k(u);
						else {
							x(!0), setTimeout(() => x(!1), 500);
							return
						}
					}, [g, h, t, r, n, x, o, i, c, N, p, k]);
					return (0, a.jsxs)("div", {
						className: "relative grow",
						children: [(0, a.jsx)("input", {
							className: m()({
								"animate animate-shake": f,
								"shadow-md !shadow-yellow-500": v
							}, "relative z-40 w-full rounded-full px-4 py-2 text-lg font-bold text-zinc-900 caret-current shadow-lg outline-none ring-zinc-800 transition-shadow duration-300 focus:ring-2"),
							ref: l,
							placeholder: u("inputPlaceholder"),
							value: g,
							onChange: e => h(e.target.value),
							id: "input",
							type: "text",
							autoFocus: !0,
							onKeyDown: F
						}), (0, a.jsx)(d.u, {
							show: j,
							as: "div",
							className: "pointer-events-none absolute right-0 top-0 z-50 my-auto mt-1 flex h-auto items-center",
							enter: "transition-opacity duration-300",
							enterFrom: "opacity-0",
							enterTo: "opacity-100",
							leave: "transition-opacity duration-500",
							leaveFrom: "opacity-100",
							leaveTo: "opacity-0",
							children: (0, a.jsx)("div", {
								className: "my-1 mr-2 flex items-center justify-center rounded-full border-green-400 bg-green-200 px-2 py-1 text-sm font-bold text-green-800",
								children: u("alreadyFound")
							})
						})]
					})
				},
				A = e => {
					let [t, r] = (0, s.useState)(!1);
					return (0, s.useEffect)(() => {
						e && t ? e.setLayoutProperty("stations-labels", "visibility", "none") : e && e.setLayoutProperty("stations-labels", "visibility", "visible")
					}, [t, e]), {
						hideLabels: t,
						setHideLabels: r
					}
				};

			// REMOVED COMPONENT I HERE

			var B = r(41024);

			function q(e) {
				return (0, a.jsx)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "1em",
					height: "1em",
					viewBox: "0 0 24 24",
					...e,
					children: (0, a.jsx)("path", {
						fill: "currentColor",
						d: "M3 18v-2h6v2H3Zm0-5v-2h12v2H3Zm0-5V6h18v2H3Z"
					})
				})
			}

			function V(e) {
				return (0, a.jsx)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "1em",
					height: "1em",
					viewBox: "0 0 24 24",
					...e,
					children: (0, a.jsx)("path", {
						fill: "currentColor",
						d: "M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
					})
				})
			}

			function W(e) {
				let {
					sortOptions: t,
					setSort: r,
					sort: n
				} = e;
				return (0, a.jsx)("div", {
					className: "h-8 w-16",
					children: (0, a.jsx)(B.R, {
						value: n,
						onChange: r,
						children: (0, a.jsxs)("div", {
							className: "relative mt-1",
							children: [(0, a.jsxs)(B.R.Button, {
								className: "relative w-full flex items-center justify-between cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow focus:outline-none focus-visible:border-zinc-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300",
								children: [(0, a.jsx)("span", {
									className: "font-bold text-gray-600 text-xs whitespace-nowrap",
									children: t.find(e => e.id === n).shortName
								}), (0, a.jsx)("span", {
									className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
									children: (0, a.jsx)(q, {
										className: "h-5 w-5 text-gray-400",
										"aria-hidden": "true"
									})
								})]
							}), (0, a.jsx)(d.u, {
								as: s.Fragment,
								leave: "transition ease-in duration-100",
								leaveFrom: "opacity-100",
								leaveTo: "opacity-0",
								children: (0, a.jsx)(B.R.Options, {
									className: "absolute mt-1 max-h-60 w-72 z-30 right-0 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
									children: t.map(e => (0, a.jsx)(Option, {
										option: e
									}, e.id))
								})
							})]
						})
					})
				})
			}
			let Option = e => {
				let {
					option: t
				} = e;
				return (0, a.jsx)(B.R.Option, {
					value: t.id,
					children: e => {
						let {
							selected: r,
							active: s
						} = e;
						return (0, a.jsxs)("li", {
							className: m()("relative cursor-default select-none py-2 pl-10 pr-4", {
								"bg-zinc-100 text-zinc-900": s,
								"text-gray-900": !s
							}),
							children: [(0, a.jsx)("span", {
								className: `block truncate ${r?"font-medium":"font-normal"}`,
								children: t.name
							}), r ? (0, a.jsx)("span", {
								className: "absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-600",
								children: (0, a.jsx)(V, {
									className: "h-5 w-5",
									"aria-hidden": "true"
								})
							}) : null]
						})
					}
				})
			};

			function Z(e) {
				return (0, a.jsx)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "1em",
					height: "1em",
					viewBox: "0 0 24 24",
					...e,
					children: (0, a.jsx)("path", {
						fill: "currentColor",
						d: "M17 22v-3h-3v-2h3v-3h2v3h3v2h-3v3h-2ZM5 20q-.825 0-1.413-.588T3 18V6q0-.825.588-1.413T5 4h1V2h2v2h6V2h2v2h1q.825 0 1.413.588T19 6v6.1q-.5-.075-1-.075t-1 .075V10H5v8h7q0 .5.075 1t.275 1H5Z"
					})
				})
			}
			var R = r(51864),
				_ = r.n(R),
				H = r(54327);
			class Y extends s.Component {
				constructor(e) {
					super(e), this.state = {
						hasError: !1
					}
				}
				static getDerivedStateFromError(e) {
					return {
						hasError: !0
					}
				}
				componentDidCatch() {}
				render() {
					return this.state.hasError ? (0, a.jsx)(a.Fragment, {}) : this.props.children
				}
			}
			var K = () => (0, a.jsx)(Y, {
				children: (0, a.jsx)("div", {
					className: "w-full my-6",
					children: (0, a.jsx)(H.a, {
						layout: "in-article",
						client: "ca-pub-7420123397062174",
						slot: "6989466712",
						format: "fluid",
						responsive: "true",
						style: {
							display: "block"
						}
					})
				})
			});
			let J = (0, s.memo)(e => {
				let {
					features: t,
					zoomToFeature: r,
					setHoveredId: s,
					hoveredId: n
				} = e, {
					LINES: o
				} = (0, f.useConfig)(), l = t.length;
				return (0, a.jsx)(d.u, {
					appear: !0,
					as: "li",
					show: !0,
					enter: "transition-all duration-250",
					enterFrom: "h-0 opacity-0",
					enterTo: "h-8 opacity-100",
					leave: "transition-opacity duration-250",
					leaveFrom: "h-8 opacity-100",
					leaveTo: "h-0 opacity-0",
					children: (0, a.jsxs)("button", {
						onClick: () => r(t[0].properties.id),
						onMouseOver: () => s(+t[0].id),
						onMouseOut: () => s(null),
						className: m()("flex w-full items-center rounded px-2 py-1 text-sm", {
							"bg-yellow-200 shadow-sm": t.some(e => e.id === n)
						}),
						children: [_()(t, e => {
							var t;
							return null === (t = o[e.properties.line || ""]) || void 0 === t ? void 0 : t.order
						}).map(e => (0, a.jsx)(T(), {
							alt: e.properties.line || "",
							src: `/images/${e.properties.line}.svg`,
							width: 64,
							height: 64,
							className: "-mr-0.5 h-5 w-5 object-contain"
						}, e.id)), (0, a.jsx)("span", {
							className: "ml-2.5 max-w-md truncate",
							children: t[0].properties.name
						}), l > 1 && (0, a.jsxs)("span", {
							className: "ml-auto whitespace-nowrap font-sans font-light text-gray-500",
							children: ["ｘ", l]
						})]
					})
				}, t[0].id)
			});
			J.displayName = "GroupedLine";
			var U = e => {
					let {
						found: t,
						idMap: r,
						setHoveredId: n,
						hoveredId: o,
						hideLabels: l,
						zoomToFeature: i
					} = e, {
						LINES: c
					} = (0, f.useConfig)(), {
						t: u
					} = y(), d = (0, s.useMemo)(() => [{
						name: u("sort.order"),
						id: "order",
						shortName: (0, a.jsx)(Z, {
							className: "h-4 w-4"
						})
					}, {
						name: u("sort.name"),
						id: "name",
						shortName: "A-Z"
					}, {
						name: u("sort.line"),
						id: "line",
						shortName: "1-9"
					}], [u]), [p, g] = (0, s.useState)("order"), h = (0, s.useMemo)(() => {
						switch (p) {
							case "order":
							default:
								return t;
							case "name":
								return _()(t, e => {
									let t = r.get(e);
									return t ? t.properties.name : null
								});
							case "line":
								return _()(t, e => {
									var t;
									let a = r.get(e);
									return a ? a.properties.line && (null === (t = c[a.properties.line]) || void 0 === t ? void 0 : t.order) || 1 / 0 : null
								}, e => {
									let t = r.get(e);
									return t ? "Point" === t.geometry.type ? 100 * t.geometry.coordinates[0] + t.geometry.coordinates[1] : t.properties.name : null
								})
						}
					}, [t, p, r, c]), x = (0, s.useMemo)(() => {
						let e = [],
							t = "";
						for (let a of h) {
							let s = r.get(a);
							s && (s.properties.name === t ? e[e.length - 1].push(s) : (e.push([s]), t = s.properties.name))
						}
						return e
					}, [h, r]);
					return (0, a.jsxs)("div", {
						children: [h.length > 0 && (0, a.jsxs)("div", {
							className: "mb-4 flex items-center justify-between",
							children: [(0, a.jsx)("div", {
								children: (0, a.jsx)("p", {
									className: "text-sm uppercase text-zinc-900 text-opacity-75",
									children: u("stations", {
										count: h.length
									})
								})
							}), (0, a.jsx)(W, {
								sortOptions: d,
								sort: p,
								setSort: g
							})]
						}), (0, a.jsx)("ol", {
							className: m()({
								"blur-md transition-all": l
							}),
							children: x.map((e, t) => t % 20 == 19 ? (0, a.jsxs)(s.Fragment, {
								children: [(0, a.jsx)(J, {
									features: e,
									zoomToFeature: i,
									setHoveredId: n,
									hoveredId: o
								}, e[0].id), (0, a.jsx)(K, {})]
							}, e[0].id) : (0, a.jsx)(J, {
								features: e,
								zoomToFeature: i,
								setHoveredId: n,
								hoveredId: o
							}, e[0].id))
						})]
					})
				},
				Q = r(3649);

			function X(e) {
				let {
					fc: t,
					routes: r
				} = e, {
					BEG_THRESHOLD: l,
					CITY_NAME: u,
					MAP_CONFIG: d,
					LINES: p,
					MAP_FROM_DATA: g
				} = (0, f.useConfig)(), {
					t: m
				} = y(), h = $(), [x, v] = (0, s.useState)(null), [b, k] = (0, s.useState)(null), N = (0, s.useRef)(null), {
					hideLabels: F,
					setHideLabels: T
				} = A(x), [z, C] = (0, s.useState)(!1), {
					value: S,
					set: P
				} = (0, o.Z)("has-shown-stripe-modal", {
					defaultValue: !1,
					initializeWithValue: !1
				}), L = (0, s.useMemo)(() => {
					let e = new Map;
					return t.features.forEach(t => {
						e.set(t.id, t)
					}), e
				}, [t.features]), E = (0, s.useMemo)(() => {
					let e = {};
					for (let r of t.features) {
						let t = r.properties.line;
						t && (e[t] = (e[t] || 0) + 1)
					}
					return e
				}, [t]), {
					value: G,
					set: D
				} = (0, o.Z)(`${u}-stations`, {
					defaultValue: null,
					initializeWithValue: !1
				}), {
					value: B,
					set: q
				} = (0, o.Z)(`${u}-stations-is-new-player`, {
					defaultValue: !0,
					initializeWithValue: !1
				}), V = (0, s.useMemo)(() => (G || []).filter(e => L.has(e)), [G, L]), W = (0, s.useCallback)(() => {
					confirm(m("restartWarning")) && (D([]), q(!0), P(!1))
				}, [D, q, P, m]), Z = (0, s.useMemo)(() => {
					let e = {};
					for (let t of V || []) {
						let r = L.get(t);
						if (!r) continue;
						let a = r.properties.line;
						a && (e[a] = (e[a] || 0) + 1)
					}
					return e
				}, [V, L]), R = (0, s.useMemo)(() => new n.Z(t.features, {
					includeScore: !0,
					includeMatches: !0,
					keys: ["properties.name", "properties.long_name", "properties.short_name", "properties.alternate_names"],
					minMatchCharLength: 2,
					threshold: .15,
					distance: 10,
					getFn: (e, t) => {
						let r = n.Z.config.getFn(e, t);
						return void 0 === r ? "" : Array.isArray(r) ? r.map(e => h(e)) : h(r)
					}
				}), [t, h]), _ = V.length / t.features.length;
				// REMOVED useEffect FOR MODAL TRIGGER

				(0, s.useEffect)(() => {
					i().accessToken = "pk.eyJ1IjoiYmVuamFtaW50ZCIsImEiOiJjbG15enh2ZzkxOThlMnVtMm5qZjVibDNoIn0.vfy-HpiOjef6EjQKY75_lg";
					let e = new(i()).Map(d);
					return e.on("load", () => {
						if (e.addSource("features", {
								type: "geojson",
								data: t
							}), e.addSource("hovered", {
								type: "geojson",
								data: {
									type: "FeatureCollection",
									features: []
								}
							}), g && r) {
							e.addSource("lines", {
								type: "geojson",
								data: r
							}), e.addLayer({
								id: "lines",
								type: "line",
								paint: {
									"line-width": ["interpolate", ["linear"],
										["zoom"], 8.763, 1.5, 15, 3, 22, 3
									],
									"line-color": ["get", "color"],
									"line-offset": ["match", ["get", "line"], "", 2, 0]
								},
								source: "lines",
								layout: {
									"line-sort-key": ["-", 100, ["get", "order"]]
								}
							}), e.addLayer({
								type: "circle",
								source: "features",
								id: "stations",
								paint: {
									"circle-radius": ["interpolate", ["linear"],
										["zoom"], 9, 1.5, 16, 10
									],
									"circle-color": "#ffffff",
									"circle-stroke-color": "rgb(122, 122, 122)",
									"circle-stroke-width": ["interpolate", ["linear"],
										["zoom"], 8, .5, 22, 2
									]
								}
							});
							let t = (0, Q.bbox)(r);
							e.fitBounds([
								[t[0], t[1]],
								[t[2], t[3]]
							], {
								padding: 100,
								duration: 0
							}), e.setMaxBounds([
								[t[0] - 1, t[1] - 1],
								[t[2] + 1, t[3] + 1]
							])
						}
						e.addLayer({
							id: "stations-hovered",
							type: "circle",
							paint: {
								"circle-radius": 16,
								"circle-color": "#fde047",
								"circle-blur-transition": {
									duration: 100
								},
								"circle-blur": 1
							},
							source: "hovered",
							filter: ["==", "$type", "Point"]
						}), e.addLayer({
							type: "circle",
							source: "features",
							id: "stations-circles",
							paint: {
								"circle-radius": ["interpolate", ["linear"],
									["zoom"], 9, ["case", ["to-boolean", ["feature-state", "found"]], 2, 1], 16, ["case", ["to-boolean", ["feature-state", "found"]], 6, 4]
								],
								"circle-color": ["case", ["to-boolean", ["feature-state", "found"]],
									["match", ["get", "line"], ...Object.keys(p).flatMap(e => [
										[e], p[e].color
									]), "rgba(255, 255, 255, 0.8)"], "rgba(255, 255, 255, 0.8)"
								],
								"circle-stroke-color": ["case", ["to-boolean", ["feature-state", "found"]],
									["match", ["get", "line"], ...Object.keys(p).flatMap(e => [
										[e], p[e].backgroundColor
									]), "rgba(255, 255, 255, 0.8)"], "rgba(255, 255, 255, 0.8)"
								],
								"circle-stroke-width": ["case", ["to-boolean", ["feature-state", "found"]], 1, 0]
							}
						}), e.addLayer({
							minzoom: 11,
							layout: {
								"text-field": ["to-string", ["get", "name"]],
								"text-font": ["Cabin Regular", "Arial Unicode MS Regular"],
								"text-anchor": "bottom",
								"text-offset": [0, -.5],
								"text-size": ["interpolate", ["linear"],
									["zoom"], 11, 12, 22, 14
								]
							},
							type: "symbol",
							source: "features",
							id: "stations-labels",
							paint: {
								"text-color": ["case", ["to-boolean", ["feature-state", "found"]], "rgb(29, 40, 53)", "rgba(0, 0, 0, 0)"],
								"text-halo-color": ["case", ["to-boolean", ["feature-state", "found"]], "rgba(255, 255, 255, 0.8)", "rgba(0, 0, 0, 0)"],
								"text-halo-blur": 1,
								"text-halo-width": 1
							}
						}), e.addLayer({
							id: "hover-label-point",
							type: "symbol",
							paint: {
								"text-halo-color": "rgb(255, 255, 255)",
								"text-halo-width": 2,
								"text-halo-blur": 1,
								"text-color": "rgb(29, 40, 53)"
							},
							layout: {
								"text-field": ["to-string", ["get", "name"]],
								"text-font": ["Cabin Bold", "Arial Unicode MS Regular"],
								"text-anchor": "bottom",
								"text-offset": [0, -.6],
								"text-size": ["interpolate", ["linear"],
									["zoom"], 11, 14, 22, 16
								],
								"symbol-placement": "point"
							},
							source: "hovered",
							filter: ["==", "$type", "Point"]
						}), e.once("data", () => {
							v(t => null === t ? e : t)
						}), e.once("idle", () => {
							v(t => null === t ? e : t), e.on("mousemove", ["stations-circles"], e => {
								if (e.features && e.features.length > 0) {
									let t = e.features.find(e => e.state.found && e.id);
									if (t && t.id) return k(t.id)
								}
								k(null)
							}), e.on("mouseleave", ["stations-circles"], () => {
								k(null)
							})
						})
					}), () => {
						e.remove()
					}
				}, [v, t, p, d, g, r]), (0, s.useEffect)(() => {
					x && x.getSource("hovered").setData({
						type: "FeatureCollection",
						features: b ? [L.get(b)] : []
					})
				}, [x, b, L]), (0, s.useEffect)(() => {
					if (x && V)
						for (let e of (x.removeFeatureState({
								source: "features"
							}), V)) x.setFeatureState({
							source: "features",
							id: e
						}, {
							found: !0
						})
				}, [V, x]);
				let H = (0, s.useCallback)(e => {
					if (!x) return;
					let t = L.get(e);
					if (t) {
						if ("Point" === t.geometry.type) x.flyTo({
							center: t.geometry.coordinates,
							zoom: 14
						});
						else {
							let e = new(i()).LngLatBounds;
							(0, c.pZ)(t, t => {
								e.extend(t)
							}), x.fitBounds(e, {
								padding: 100
							})
						}
					}
				}, [x, L]);
				return (0, a.jsxs)("div", {
					className: "flex h-screen flex-row items-center justify-between",
					children: [(0, a.jsxs)("div", {
						className: "relative flex h-full grow justify-center",
						children: [(0, a.jsx)("div", {
							className: "absolute left-0 top-0 h-full w-full",
							id: "map"
						}), (0, a.jsxs)("div", {
							className: "absolute top-4 h-12 w-96 max-w-full px-1 lg:top-32",
							children: [(0, a.jsx)(M, {
								className: "mb-4 rounded-lg bg-white p-4 shadow-md lg:hidden",
								foundProportion: _,
								foundStationsPerLine: Z,
								stationsPerLine: E,
								defaultMinimized: !0,
								minimizable: !0
							}), (0, a.jsxs)("div", {
								className: "flex gap-2 lg:gap-4",
								children: [(0, a.jsx)(O, {
									fuse: R,
									found: V,
									setFound: D,
									setIsNewPlayer: q,
									inputRef: N,
									map: x,
									idMap: L
								}), (0, a.jsx)(j, {
									onReset: W,
									hideLabels: F,
									setHideLabels: T
								})]
							})]
						})]
					}), (0, a.jsxs)("div", {
						className: "z-10 hidden h-full overflow-y-auto bg-zinc-50 p-6 shadow-lg lg:block lg:w-96 xl:w-[32rem]",
						children: [(0, a.jsx)(M, {
							foundProportion: _,
							foundStationsPerLine: Z,
							stationsPerLine: E,
							minimizable: !0,
							defaultMinimized: !0
						}), (0, a.jsx)("hr", {
							className: "my-4 w-full border-b border-zinc-100"
						}), (0, a.jsx)(U, {
							found: V,
							idMap: L,
							setHoveredId: k,
							hoveredId: b,
							hideLabels: F,
							zoomToFeature: H
						})]
					}), (0, a.jsxs)(w, {
						inputRef: N,
						open: B,
						setOpen: q,
						children: [m("introInstruction"), " ⏎"]
					}),
					// REMOVED COMPONENT I CALL HERE
                    ]
				})
			}
		},
		86259: function(e, t, r) {
			r.r(t), r.d(t, {
				ConfigContext: function() {
					return n
				},
				Provider: function() {
					return l
				},
				useConfig: function() {
					return o
				}
			});
			var a = r(57437),
				s = r(2265);
			let n = (0, s.createContext)({
					LOCALE: "en",
					BEG_THRESHOLD: .2,
					CITY_NAME: "default",
					MAP_CONFIG: {
						container: "map",
						style: "mapbox://styles/benjamintd/clohp062g002b01o4e3lt1exh",
						bounds: [
							[-4.184549, 40.156349],
							[-3.19578, 40.62702]
						],
						maxBounds: [
							[-5.184549, 39.156349],
							[-2.19578, 41.62702]
						],
						minZoom: 6,
						fadeDuration: 50
					},
					STRIPE_LINK: "https://buy.stripe.com/bIY8x3fiCgmC9bi8wx",
					METADATA: {
						title: "Metro Memory",
						description: "How many of the Metro stations can you name from memory?",
						openGraph: {
							title: "Metro Memory",
							description: "How many of the metro stations can you name from memory? Try this game to find out.",
							type: "website",
							locale: "en",
							url: "https://metro-memory.com/"
						}
					},
					LINES: {}
				}),
				o = () => (0, s.useContext)(n),
				l = e => {
					let {
						children: t,
						value: r
					} = e;
					return (0, a.jsx)(n.Provider, {
						value: r,
						children: t
					})
				};
			t.default = l
		}
	}
]);
