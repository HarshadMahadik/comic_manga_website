
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
            onePiece: {
                onech1: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%200.pdf?alt=media&token=45883182-182a-4afb-98a0-045faf790c7e",
                onech2: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%201%20_%20Romance%20Dawn.pdf?alt=media&token=f7c4c0f3-fb49-4039-973b-157d9530ae2e",
                onech3: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%201.1%20_%20Romance%20Dawn%20%5BVersion%201%5D.pdf?alt=media&token=0225ac24-e0b7-44c2-b9a8-54989e01e6cc",
                onech4: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%201.2%20_%20Romance%20Dawn%20%5BVersion%202%5D.pdf?alt=media&token=b65b0aa5-4a52-4142-bb4f-b415147b022d",
                onech5: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%202%20_%20They%20Call%20Him%20Strawhat%20Luffy.pdf?alt=media&token=e76a8f12-34b9-4af6-988c-3bd09f40dd41",
                onech6: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%202.3.pdf?alt=media&token=570ca5eb-70fc-45bb-933c-8d82d64c58ab",
                onech7: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%203%20_%20Pirate%20Hunter%20Zoro%20Enters.pdf?alt=media&token=e049a39d-47bf-4e84-880c-55b8dc8b7782",
                onech8: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%204%20_%20Marine%20Lieutenant%20Axe%20Hand%20Morgan.pdf?alt=media&token=d9d9b578-6237-49f5-be36-a9e624a7bbea",
                onech9: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%205%20(V3)%20_%20The%20Pirate%20King%20And%20The%20Great%20Swordsman.pdf?alt=media&token=35cf0379-b995-4842-b406-9b47b0d55705", 
                onech10: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%205.3.pdf?alt=media&token=e472f089-aed9-4cd0-aa63-401596c18b79",
                onech11: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%206%20_%20The%20First%20Crew%20Member.pdf?alt=media&token=6dd3068e-d297-438f-9a57-04ed12e2a7be",
                onech12: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%207%20_%20Friends.pdf?alt=media&token=6a0b7475-c496-4feb-87ad-86e1b9b5d91e",
                onech13: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%208%20_%20Nami%20Enters.pdf?alt=media&token=b3b7e985-e613-4110-b126-75503493db3e",
                onech14:"https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%208.3.pdf?alt=media&token=44087849-3ac1-4a00-9296-e03cf26ac781",
                onech15: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%209%20_%20Evil%20Woman.pdf?alt=media&token=81d5d680-2382-4723-84bc-9286f5b918e4",
                onech16: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%2010%20_%20What%20Happened%20At%20The%20Bar.pdf?alt=media&token=0251a9dc-6e2b-413b-adff-82c2c25bd596",
                nar1:"https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.1%20Chapter%201%20_%20Uzumaki%20Naruto.pdf?alt=media&token=dd1bee48-340e-4244-93a8-073e9630991c",
            },

        };

        

       




        
        // Add event listeners for one piece chapter links
        document.getElementById("One1").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.onePiece.onech1);
        });

        document.getElementById("One2").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.onePiece.onech2);
        });

        document.getElementById("One3").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.onePiece.onech3);
        });
        document.getElementById("One4").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.onePiece.onech4);
        });
        document.getElementById("One5").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.onePiece.onech5);
        });
        document.getElementById("One6").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.onePiece.onech6);
        });
        document.getElementById("One7").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.onePiece.onech7);
        });
        document.getElementById("One8").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.onePiece.onech8);
        });
        document.getElementById("One9").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.onePiece.onech9);
        });
        document.getElementById("One10").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.onePiece.onech10);
        });
        document.getElementById("One11").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.onePiece.onech11);
        });
        document.getElementById("One12").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.onePiece.onech12);
        });
        document.getElementById("One13").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.onePiece.onech13);
        });
        document.getElementById("One14").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.onePiece.onech14);
        });
        document.getElementById("One15").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.onePiece.onech15);
        });
        document.getElementById("One16").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.onePiece.onech16);
        });
        document.getElementById("nar1").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.onePiece.nar1);
        });
        




        