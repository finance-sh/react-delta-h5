### 2017

2017/1/2 - 2017/1/6

1.  ����Ԥ���빤��,less�Ļ�Ϊ����postcss��precss
2.  ��ΪԤ���빤�ߵ�����less�Ļ�����sass���﷨
3.  Ϊ���ݲ�ͬƽ̨css��ԭ.less��׺ȫ���Ļ�Ϊ.duss
4.  ��ʽ��ȫ��css�ļ�
6.  precss���õ�postcss-partial-importΪ����hotʧЧ,�����޷��Զ�ˢ��,
    �ֶ�����postcss-import������ǰ�ý���˴�����
7.  �Ż�adaptive��NPM����
8.  ȥ��wrc��ͷ�ļ�

2017/1/3

09. ͷ��suppleTitle����dangerouslySetInnerHTML����
10. ����postcss����滻����
11. �淶��������

-----------------------------------------------------------------------

����imoport���
��������ʽ
����es6תes5  
���������ű�
�淶����

�滻��Ŀ�б���

-----------------------------------------------
dialog.duss���� $duDialogHdColor: #333;
                duDialogHBdFontSize �޸�Ϊ duDialogHd2BdFontSize
           ���� font-size: $duDialogHdFontSize;
-----------------------------------------------
$duLoadingFontSize��Ϊ$duLoadingTextFontSize
-----------------------------------------------
duItemIconFontSize  duItemIconColor
$duItemPaddingRight��Ϊ duItemBeforePaddingRight
-----------------------------------------------
$duPanelLineColor
duPanelBackGroundColor
duPanelHdBackGroundColor
-----------------------------------------------
duTabbarSelectLabelColor -> duTabbarItemSelectLabelColor
duTabBarbackGroundColor -> duTabBarBackGroundColor
buttonFont -> Font

-----------------------------------------------

2017/1/7
1. list���ȥ��item-start  du-item-column �Ż���������ʵ��
2. lsit�����ʽ�������б����ɷ�Ϊ(hd/bd/ft)3������� before�ĳ�bd after��Ϊft
�޸ı���duitembeforepaddingright
ȥ��duitembdpaddingright ����duitemftpaddingleft
3. ����duItemSideHdWidth
4. duitem li�Ļ���div
5. duitem ���� $duItemFontSize duItemColor
6. ����form �����ļ�
7. ��input select textarea ���� ��ɫ �ֺż̳�body��ʽ

2017/1/9
1. side-list��Ӷ�����ʾ��ʽ
2. ����duItemSideFtAlignItems����,ȥ��duItemSidePaddingRight����
3. �����ťFontSize�޸�ΪSize
4. ���������һЩ��ʽ
2017/1/10
1. ����form unit style
2. �޸�duItemIconFontSize
*. header act �������Ƴ��ڵ�
*. precss - ����δ��������û����ʾ����  ����csslint

*. ������鹤�� ����delta������'$'valueֵ������ʾ
*. precss û��css���㴦��

* 2017/1/12
1. loading������ֿ�����

2017/1/16
����FORM����ʼ����ʽ
Form����duFormPlaceHolderFontSize����

2017/01/22
����reactǶ�׶�һ��divʱ��ͼ�괹ֱ����
Header add isDisplay

2017/02/08
�޸������ֻ�����ͼ�걻������

2017/04/26
�Ƴ�base.duss html,body{height:100%}

2017/05/07
����loadingת�ջ�ͼƬ
Toast֧�����غ�ص�











precss: {         
    'import': {
        prefix: ''
    }
},