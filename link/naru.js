
        // Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyAQFFD0msPus55mE55_JIZP4sl_BZsu6A8",
            authDomain: "mangadb-86f0e.firebaseapp.com",
            projectId: "mangadb-86f0e",
            storageBucket: "mangadb-86f0e.appspot.com",
            messagingSenderId: "372940836103",
            appId: "1:372940836103:web:ff4456fd9370f5e050c9a2"
        };
        
        
        // // Firebase Storage URL for One Piece Chapter 0 PDF
        // const onePieceChapter0Url = "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%200.pdf?alt=media&token=45883182-182a-4afb-98a0-045faf790c7e";

        // // Function to retrieve and display PDF from Firebase Storage in a new tab
        // function openPDFInNewTab(url) {
        //     window.open(url, '_blank');
        // }

        // // Add event listener to the chapter link
        // const chapterLink = document.getElementById("One1");
        // chapterLink.addEventListener("click", (event) => {
        //     event.preventDefault();
        //     openPDFInNewTab(onePieceChapter0Url);
        // });

        // Initialize Firebase
        // firebase.initializeApp(firebaseConfig);

        // Function to retrieve and display PDF from Firebase Storage in a new tab
        function openPDFInNewTab(url) {
            window.open(url, '_blank');
        }

        // Firebase Storage URLs for One Piece Chapters
        const chapterUrls = {
            
                ch1: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.1%20Chapter%201%20_%20Uzumaki%20Naruto.pdf?alt=media&token=dd1bee48-340e-4244-93a8-073e9630991c",
                ch2: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.1%20Chapter%202%20_%20Konohamaru!.pdf?alt=media&token=a3490519-2b38-4d3b-b94b-26c603b3b53d",
                ch3: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.1%20Chapter%203%20_%20Uchiha%20Sasuke.pdf?alt=media&token=2e47ce07-4b3e-4296-87c3-ef22eaf62762",
                ch4: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.1%20Chapter%204%20_%20Hatake%20Kakashi.pdf?alt=media&token=93a8151b-29d7-4b0a-b250-a7e3c88866c6",
                ch5: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.1%20Chapter%205%20_%20Carelessness%20Is%20Your%20Worst%20Enemy.pdf?alt=media&token=bbcf3311-979f-4437-8c0b-bdde7474dd79",
                ch6: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.1%20Chapter%206%20_%20Not%20Sasuke-Kun.pdf?alt=media&token=9bc6da9a-aca3-47e1-b546-11313ac280d7",
                ch7: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.1%20Chapter%207%20_%20Kakashi's%20Conclusion.pdf?alt=media&token=9cad4162-db13-4b36-b12c-5072735c4191",
                ch8: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.2%20Chapter%208%20_%20That's%20Why%20You're%20Failures.pdf?alt=media&token=a1e18db7-2505-4558-a4ed-aa7534b696bf",
                ch9: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.2%20Chapter%209%20_%20The%20Worst%20Possible%20Client.pdf?alt=media&token=0436eabf-bb6c-4999-9ac5-ecbacf029408", 
                ch10: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.2%20Chapter%2010%20_%20Two%20Down.pdf?alt=media&token=a609404d-3532-44e1-82ce-67889bb95203",
                ch11: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.2%20Chapter%2011%20_%20Disembark.pdf?alt=media&token=c196fd32-776e-40f3-a607-111bb8b3303f",
                ch12: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.2%20Chapter%2012%20_%20It's%20Over.pdf?alt=media&token=9c4745b7-8d39-448f-aed0-cbc828ddd260",
                ch13: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.2%20Chapter%2013%20_%20I'm%20A%20Ninja.pdf?alt=media&token=e16bbeef-9da8-4d48-bcd5-55a7cc22291c",
                ch14:"https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.2%20Chapter%2014%20_%20Secret%20Plan.pdf?alt=media&token=0c0a2fca-1b11-48db-b553-1f28ac851339",
                ch15: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.2%20Chapter%2015%20_%20Sharingan%20Ressurected.pdf?alt=media&token=a2efff86-d67e-4c4c-a86b-47c7716566b3",
                ch16: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.2%20Chapter%2016%20_%20_who%20Are%20You__.pdf?alt=media&token=67e16d6e-3d2b-40e0-ac7d-2826bffe7e73",
                ch17:"https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.2%20Chapter%2017%20_%20Preparation%20For%20Battle.pdf?alt=media&token=af078925-eb46-4b6a-a6c0-eda4719b40a7",
                ch18: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.3%20Chapter%2018%20_%20Training%20Commen,ce.pdf?alt=media&token=2ad09a97-e155-4d76-b9c1-d88f43a8d940",
                ch19: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.3%20Chapter%2019%20_%20Symbol%20Of%20Courage.pdf?alt=media&token=bf92cf71-6fd5-4be2-89ff-739e2add5095",
                ch20: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.3%20Chapter%2020%20_%20The%20Country%20That%20Had%20A%20Hero.pdf?alt=media&token=a456e1cc-8247-4029-8f51-47d684786a1a",
                ch21:"https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.3%20Chapter%2021%20_%20Encounter%20In%20The%20Forest.pdf?alt=media&token=8da6033e-4729-40ec-b4ea-2341b4658d36",
                ch22:"https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.3%20Chapter%2022%20_%20A%20Rival%20Appears!!.pdf?alt=media&token=a749d8b5-210b-4089-85a1-f365cbcfaf61",
                ch23:"https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.3%20Chapter%2023%20_%20Two%20Surprise%20Attacks.pdf?alt=media&token=cbecab49-36de-4d9d-ba89-d2a4bfab0fcc",
                ch24:"https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.3%20Chapter%2024%20_%20Speed.pdf?alt=media&token=e2224843-2a6f-43dd-b6cb-f46c54302393",
                ch25:"https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.1%20Naruto%20Pilot%20Manga.pdf?alt=media&token=1bef9455-a208-4430-a3ac-099dd9f19654",

        };

        

       




        
        // Add event listeners for one piece chapter links
        document.getElementById("One1").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch1);
        });

        document.getElementById("One2").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch2);
        });

        document.getElementById("One3").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch3);
        });
        document.getElementById("One4").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch4);
        });
        document.getElementById("One5").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch5);
        });
        document.getElementById("One6").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch6);
        });
        document.getElementById("One7").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch7);
        });
        document.getElementById("One8").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch8);
        });
        document.getElementById("One9").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch9);
        });
        document.getElementById("One10").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch10);
        });
        document.getElementById("One11").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch11);
        });
        document.getElementById("One12").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch12);
        });
        document.getElementById("One13").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch13);
        });
        document.getElementById("One14").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch14);
        });
        document.getElementById("One15").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch15);
        });
        document.getElementById("One16").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch16);
        });
        document.getElementById("One17").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch17);
        });
        document.getElementById("One18").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch18);
        });
        document.getElementById("One19").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch19);
        });
        document.getElementById("One20").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch20);
        });
        document.getElementById("One21").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch21);
        });
        document.getElementById("One22").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch22);
        });
        document.getElementById("One23").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch23);
        });
        document.getElementById("One24").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch24);
        });
        document.getElementById("One25").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch25);
        });
        




        