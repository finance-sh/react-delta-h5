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
8. precss - ����δ��������û����ʾ����  ����csslint

9. ������鹤�� ����delta������'$'valueֵ������ʾ
10. precss û��css���㴦��

2017/1/9
1. side-list��Ӷ�����ʾ��ʽ






















precss: {         
    'import': {
        prefix: ''
    }
},