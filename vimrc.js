f &compatible
  set nocompatible
  endif
  set hidden

  set noautochdir
  set shortmess=a
  set autowriteall

  filetype plugin indent on
  syntax enable

  let mapleader = "\<space>"
  let g:mapleader = "\<space>"

  set noshowmode
  set autoread
  set iskeyword=@,$,48-57,192-255,_

  nnoremap <leader>k :Bclose<CR>

  autocmd Filetype ruby,coffee,sass,scss,jade,erb setlocal ts=2 sw=2
  autocmd Filetype md,markdown setlocal ts=4 sw=4
  autocmd Filetype md,markdown setlocal expandtab
  autocmd BufNewFile,BufRead *.md setlocal ts=4 sw=4
  autocmd BufNewFile,BufRead *.md setlocal expandtab
  autocmd BufNewFile,BufRead *.vue setlocal filetype=vue
  autocmd Filetype vue setlocal filetype=html

  map <s-tab> :bp<cr>
  nnoremap <C-T> :tabnew %:p<CR>
  nnoremap <tab> :bn<cr>

  " fold
  set nofen
  set foldlevel=0
  set foldmethod=manual
  set foldnestmax=5

  vnoremap <space><space> zf
  nnoremap <space><space> za

  "encoding
  set encoding=utf8
  scriptencoding utf-8
  set fileencodings=utf-8,ucs-bom,gbk,cp936,gb18030,big5,euc-jp,euc-kr,latin1
  autocmd BufNewFile,BufRead *.git/{,modules/**/}{COMMIT,MERGE}* set fenc=utf8



  " better
  set lazyredraw
  map q: :q
  nnoremap <Leader>w :w<CR>
  vmap <Leader>y "+y
  vmap <Leader>d "+d
  nmap <Leader>p "+p
  nmap <Leader>P "+P
  vmap <Leader>p "+p
  vmap <Leader>t :tabnew<CR>
  autocmd FileType coffee,erb,html,css,scss,rb setlocal foldmethod=indent
  map 0 ^
  map j gj
  map k gk
  nnoremap Y "+y
  nnoremap <silent><S-b> :<C-u>call search('\<\<Bar>\U\@<=\u\<Bar>\u\ze\%(\U\&\>\@!\)\<Bar>\%^','bW')<CR>
  nnoremap <silent><S-w> :<C-u>call search('\<\<Bar>\U\@<=\u\<Bar>\u\ze\%(\U\&\>\@!\)\<Bar>\%$','W')<CR>
  noremap <C-S> :w<CR>
  vnoremap <C-T> :tabnew %:p:h<CR>
  noremap <F11> <C-u>:wincmd o<CR>
  set autoindent
  set shm=at
  set cmdheight=2
  set nosmartindent
  set nocindent
  set backspace=eol,start,indent
  set background=light
  set expandtab
  set listchars=tab:>·
  set fileformats=unix,dos,mac
  set history=10000
  set hlsearch
  set ignorecase
  set incsearch
  set laststatus=2
  set lbr
  set mat=2
  set mouse=
  set mousemodel=extend
  set nobackup
  set switchbuf=usetab
  set nolinebreak
  set noswapfile
  set nowb
  set nowrap
  set pastetoggle=<F4>
  set relativenumber
  set number
  set sessionoptions-=buffers
  set sessionoptions-=options
  set shiftwidth=2
  set showmatch
  set smartcase
  set smarttab
  set splitbelow
  set splitright
  set tabstop=2
  set undodir=/Users/frank/.vim/undodir/
  set undofile
  set viminfo^=% " Remember info about open buffers on close



  set colorcolumn=0

  " Don't close window, when deleting a buffer
  command! Bclose call <SID>BufcloseCloseIt()
  function! <SID>BufcloseCloseIt()
    let l:currentBufNum = bufnr("%")
      let l:alternateBufNum = bufnr("#")

        if buflisted(l:alternateBufNum)
	    buffer #
	      else
	          bnext
		    endif

		      if bufnr("%") == l:currentBufNum
		          new
			    endif

			      if buflisted(l:currentBufNum)
			          execute("bdelete! ".l:currentBufNum)
				    endif
				    endfunction

				    autocmd FileType * setlocal formatoptions-=c formatoptions-=r formatoptions-=o

				    let vimDir = '$HOME/.vim'
				    let &runtimepath.=','.vimDir
				    set undolevels=1000         " How many undos
				    set undoreload=20000        " number of lines to save for undo

				    " Keep undo history across sessions by storing it in a file
				    if has('persistent_undo')
				      let myUndoDir = expand(vimDir . '/undodir')
				        " Create dirs
					  call system('mkdir ' . vimDir)
					    call system('mkdir ' . myUndoDir)
					      let &undodir = myUndoDir
					        set undofile
						endif



						" StripTrailingWhitespaces
						nnoremap <silent> <F5> :let _s=@/<Bar>:%s/\s\+$//e<Bar>:let @/=_s<Bar>:nohl<CR>
						"set spell spelllang=en_us

						autocmd FileType gitcommit call setpos('.', [0, 1, 1, 0])
