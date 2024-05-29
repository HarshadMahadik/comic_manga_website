
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
            
                ch1: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FPrologue%201.pdf?alt=media&token=8e5628c1-2b59-4430-898a-6a5fd1eff5b2",
                ch2: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FPrologue%202.pdf?alt=media&token=b789d36d-d762-47fa-814e-85aa452f6946",
                ch3: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FPrologue%203.pdf?alt=media&token=59d3fbd7-54c5-4f4f-bbee-23202c79cf64",
                ch4: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FPrologue%204.pdf?alt=media&token=e185c083-3fd0-4393-8395-87d27950c6e3",
                ch5: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FPrologue%205.pdf?alt=media&token=39549cae-e65c-486d-b094-ed70cbc9e623",
                ch6: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FPrologue%206.pdf?alt=media&token=01e6d9f9-3d37-436b-b05f-08f4623f4532",
                ch7: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FPrologue%207.pdf?alt=media&token=abd01b3e-5cfb-4b70-ac8c-06fe51c2abe6",
                ch8: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FPrologue%208.pdf?alt=media&token=7e7687a3-8019-4fe3-b3c2-3d0354f6305c",
                ch9: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FPrologue%209.pdf?alt=media&token=c82df62a-a8b2-418b-92bd-ef7fcfd33797", 
                ch10: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FPrologue%2010.pdf?alt=media&token=1c7465f2-5d01-45ec-b1bb-54dffc6f8421",
                ch11: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FPrologue%2011.pdf?alt=media&token=68e3f4e1-7c1a-4b73-ab99-a7433be7c0e8",
                ch12: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FPrologue%2012.pdf?alt=media&token=c026e0f7-8c7d-4ffb-9eb0-9898d383f468",
                ch13: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FPrologue%2013.pdf?alt=media&token=1d8f0b7e-b2d5-4218-9c1b-c05e738cce6a",
                ch14:"https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FPrologue%2014.pdf?alt=media&token=92e537f5-b0e0-49fc-9638-bdf7088fd17a",
                ch15: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FPrologue%2015.pdf?alt=media&token=00cfe209-60e6-4fb2-b8f8-5c5928fc280a",
                ch16: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FPrologue%2016.pdf?alt=media&token=7a345530-04ea-4d0f-955a-57cb21fafb3f",
                ch17:"https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FChapter%201.pdf?alt=media&token=6a0d1afb-8863-4aba-9da0-ae25bf34c839",
                ch18: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FChapter%202.pdf?alt=media&token=5f63fa9a-551f-49c1-a689-1370c54df040",
                ch19: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FChapter%203.pdf?alt=media&token=64736304-f894-4464-8075-232aa71b7152",
                ch20: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FChapter%204.pdf?alt=media&token=255f9155-eaf5-4004-93e8-4e29e5f258c0",
                ch21:"https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FChapter%205.pdf?alt=media&token=de449968-b922-4024-8d6c-aee55feb5b32",
                ch22:"https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBerserk%2FChapter%206.pdf?alt=media&token=95eb1373-ba2f-4826-b485-a852afccef94",
                
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
        



        