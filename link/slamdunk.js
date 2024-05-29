
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
            
                ch1: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2Fslam%20dunk%2FVol.1%20Chapter%201%20_%20Sakuragi-Kun.pdf?alt=media&token=d9929b19-63ab-4c6a-8645-339bd6748f03",
                ch2: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2Fslam%20dunk%2FVol.1%20Chapter%202%20_%20Rukawa%20Kaede!.pdf?alt=media&token=3bb8cdd3-78ae-4beb-a3b6-47626a6d4a23",
                ch3: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2Fslam%20dunk%2FVol.1%20Chapter%203%20_%20Blood.pdf?alt=media&token=64a6781c-0bf4-48c0-aadc-9bb741d002e6",
                ch4: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2Fslam%20dunk%2FVol.1%20Chapter%204%20_%20Gori.pdf?alt=media&token=01b02cb9-1733-4c67-8151-f4401f800f4b",
                ch5: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2Fslam%20dunk%2FVol.1%20Chapter%205%20_%20For%20Love%2C%20I%20Will%20Win%20For%20Sure!.pdf?alt=media&token=85ffd658-b479-4b7d-9877-5226694d9c6e",
                ch6: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2Fslam%20dunk%2FVol.1%20Chapter%206%20_%20Jam!.pdf?alt=media&token=3da156fb-30f8-49ba-83ec-24d281751c58",
                ch7: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2Fslam%20dunk%2FVol.1%20Chapter%207%20_%20I%20M%20Basketball%20Man.pdf?alt=media&token=de13fdf1-b309-42c4-b697-08139a779d13",
                ch8: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2Fslam%20dunk%2FVol.1%20Chapter%208%20_%20Sakuragi%20Joins!.pdf?alt=media&token=e994133e-7bd7-4d9e-b2bf-7c91661828e4",
                ch9: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2Fslam%20dunk%2FVol.1%20Chapter%209%20_%20Basics%20Are%20Important!.pdf?alt=media&token=47be0ad8-b117-48fa-a640-956938c8fcef",
                ch10: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2Fslam%20dunk%2FVol.2%20Chapter%2010%20_%20The%20Afternoon%20Without%20Patience.pdf?alt=media&token=3addb696-d277-4946-bc3d-bc0a2366e75d",
                
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
        

        
